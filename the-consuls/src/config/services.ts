export interface ServiceTime {
  id: string;
  title: string;
  time: string;
  icon: string;
  accentColour: string;
}

export const services: ServiceTime[] = [
  {
    id: "sunday",
    title: "Sunday Service",
    time: "12:30 PM",
    icon: "calendar_today",
    accentColour: "#0d59f2",
  },
  {
    id: "midweek",
    title: "Midweek Service",
    time: "6:00 PM",
    icon: "bolt",
    accentColour: "#a855f7",
  },
];
