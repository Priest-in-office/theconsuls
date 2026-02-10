import { siteConfig } from "../config/site";

const { location, googleMapsApiKey } = siteConfig;

export default function Location() {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${location.mapEmbedQuery}&zoom=17`;

  return (
    <section className="mt-8 mb-12">
      <div className="relative h-56 rounded-2xl overflow-hidden bg-gray-800">
        {/* Google Maps Embed */}
        <iframe
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapSrc}
          allowFullScreen
          title={`Map of ${location.name}`}
        />

        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent pointer-events-none" />

        {/* Location info */}
        <div className="absolute bottom-4 left-4 pointer-events-none">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</p>
          <p className="text-lg font-black text-white">{location.address}</p>
          <p className="text-sm text-gray-400">{location.city}, {location.country}</p>
        </div>
      </div>
    </section>
  )
}