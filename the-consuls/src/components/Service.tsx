import ServiceCard from "./ServiceCard"
import { services } from "../config/services"

export default function ServiceTimes() {
  return (
    <section className="mt-12 mb-8">
      <div className="flex items-end justify-between mb-6 px-2">
        <div className="h-1 flex-1 bg-primary/20 mr-4 mb-2 rounded-full"></div>
        <h2 className="text-white text-3xl font-black tracking-tighter uppercase italic leading-none">Pull Up</h2>
      </div>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          time={service.time}
          icon={service.icon}
          accentColour={service.accentColour}
        />
      ))}
    </section>
  )
}