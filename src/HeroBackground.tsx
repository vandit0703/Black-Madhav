import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 2200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.8 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() - 0.5) * 2);
      pos[i * 3] = Math.sin(phi) * Math.cos(theta) * radius;
      pos[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * radius;
      pos[i * 3 + 2] = Math.cos(phi) * radius;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
    ref.current.rotation.y += delta * 0.02;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.12) * 0.15;
  });

  return (
    <group rotation={[0, 0.2, 0]}> 
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#7dd3fc"
          size={0.06}
          sizeAttenuation
          depthWrite={false}
          opacity={0.65}
        />
      </Points>
    </group>
  );
}

function WireframeGeometry() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
    ref.current.rotation.y += delta * 0.14;
    ref.current.rotation.z += delta * 0.08;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}> 
      <icosahedronGeometry args={[3.2, 1]} />
      <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.34} />
    </mesh>
  );
}

function CSSFallbackBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -left-24 top-10 h-72 w-72 max-w-none rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.45) 0%, transparent 70%)",
          animation: "heroGlow1 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute right-0 top-1/4 h-64 w-64 max-w-none rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(14,165,233,0.35) 0%, transparent 70%)",
          animation: "heroGlow2 10.5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-80 w-80 max-w-none rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 75%)",
          animation: "heroGlow3 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.14) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: "radial-gradient(rgba(56,189,248,0.22) 1px, transparent 22px)",
          backgroundSize: "48px 48px",
        }}
      />
      <style>{`
        @keyframes heroGlow1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(18px,-24px) scale(1.04)} 66%{transform:translate(-14px,18px) scale(0.96)} }
        @keyframes heroGlow2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-28px,22px) scale(1.06)} 66%{transform:translate(22px,-14px) scale(0.94)} }
        @keyframes heroGlow3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-36px) scale(1.05)} }
      `}</style>
    </div>
  );
}

export function HeroBackground() {
  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglAvailable(isWebGLAvailable());
  }, []);

  if (webglAvailable === null) {
    return <div className="absolute inset-0 bg-white" />;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-indigo-950 z-10" />
      {webglAvailable ? (
        <Canvas
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          camera={{ position: [0, 0, 8], fov: 42 }}
          style={{ position: "absolute", inset: 0, zIndex: 10 }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight color="#93c5fd" intensity={0.4} position={[5, 5, 5]} />
          <ParticleField />
          <WireframeGeometry />
        </Canvas>
      ) : (
        <CSSFallbackBackground />
      )}
    </div>
  );
}
