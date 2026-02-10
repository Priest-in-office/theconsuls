export const siteConfig = {
  name: "The Consuls",
  fullName: "CE Omole Teens Church",
  tagline: "Your Story Starts Here",
  description: "A youth church community for teens.",
  
  contact: {
    email: "hello@theconsuls.org",
    phone: "+234 000 000 0000",
  },
  
  location: {
    name: "Christ Embassy Omole",
    address: "912, Omofade Crescent, Omole Phase 1",
    city: "Lagos",
    country: "Nigeria",
    mapUrl: "https://maps.google.com/?q=Christ+Embassy+Omole",
    mapEmbedQuery: "912+Omofade+Crescent+Omole+Phase+1",
  },

  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  
  copyright: {
    year: new Date().getFullYear(),
    text: "All rights reserved.",
  },
};
