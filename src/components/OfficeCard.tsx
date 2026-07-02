import { ArrowRight, MapPin } from "lucide-react";

type OfficeLocation = {
  city: string;
  phone: string;
  mapUrl: string;
  imageSrc: string;
};

type OfficeCardProps = {
  location: OfficeLocation;
};

export default function OfficeCard({ location }: OfficeCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-[#17384A] px-4 py-4">
        <div className="flex items-center gap-3 text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/20 text-lg">
            <MapPin className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Location</p>
            <h3 className="text-lg font-semibold text-white">{location.city}</h3>
          </div>
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden bg-slate-100">
        <img
          src={location.imageSrc}
          alt={`${location.city} office building`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent px-4 py-4">
          <p className="text-sm font-medium text-slate-100">{location.phone}</p>
          <a
            href={location.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-200"
          >
            Get Direction
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
