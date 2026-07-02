import officeImage from "../assets/loc.jpg";
import OfficeCard from "./OfficeCard";

type OfficeLocationData = {
  city: string;
  phone: string;
  mapUrl: string;
  imageSrc: string;
};

const locations: OfficeLocationData[] = [
  
  {
    city: "Jamnagar",
    phone: "+91 7041090715",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=MDIDM+Infoway+Jamnagar",
    imageSrc: officeImage,
  },
  
  {
    city: "Junagadh",
    phone: "+91 7041950715",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=MDIDM+Infoway+Junagadh",
    imageSrc: officeImage,
  },
];

export default function OfficeLocations() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Office Locations
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-blue-950 md:text-5xl">
            Our Office Locations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore our locations across Gujarat with quick access to directions and contact details.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {locations.map((location) => (
            <div key={location.city} className="h-[28rem]">
              <OfficeCard location={location} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
