import { socials } from "../config/socials";
import { siteConfig } from "../config/site";
import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <footer className="bg-[#1a2233] rounded-t-3xl">
      {/* Newsletter Section */}
      <div className="px-6 py-10 border-b border-white/10">
        <h3 className="text-white text-xl font-black tracking-tight uppercase italic mb-2">Stay Connected</h3>
        <p className="text-gray-400 text-sm mb-4">Get updates on events, services & more.</p>
        <form className="flex gap-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
          <button 
            type="submit" 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-sm font-bold transition-all active:scale-95"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Socials & Links */}
      <div className="px-6 py-8">
        <div className="flex items-center justify-center gap-6 mb-6">
          {socials.map((social) => (
            <SocialLink 
              key={social.id} 
              url={social.url} 
              icon={<social.icon />} 
              label={social.label} 
            />
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 font-medium">
          &copy; {siteConfig.copyright.year} {siteConfig.fullName}. {siteConfig.copyright.text}
        </div>
      </div>
    </footer>
  )
}