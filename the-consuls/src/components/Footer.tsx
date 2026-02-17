import { useState, useEffect } from "react";
import { socials } from "../config/socials";
import { siteConfig } from "../config/site";
import SocialLink from "./SocialLink";

const API_URL = import.meta.env.VITE_API_URL;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setMessage("");
        setStatus("idle");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Subscription failed. Please try again."); 
      }

      setStatus("success");
      setMessage("Thanks for subscribing");
      setEmail("");

      // Clear success message after 3 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("")
      }, 3000);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    }
  }
  
  return (
    <footer className="bg-[#1a2233] rounded-t-3xl">
      {/* --- MODAL START --- */}
      {(status === "success" || status === "error") && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white dark:bg-[#1a2233] p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center border border-white/10 animate-in fade-in zoom-in duration-300">
            
            {/* Icon Circle */}
            <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full mb-4 ${
              status === "success" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            }`}>
              <span className="material-symbols-outlined text-3xl">
                {status === "success" ? "check_circle" : "error"}
              </span>
            </div>

            {/* Text Content */}
            <h3 className={`text-lg font-bold mb-2 ${
              status === "success" ? "text-gray-900 dark:text-white" : "text-red-600"
            }`}>
              {status === "success" ? "Success!" : "Error"}
            </h3>
            
            <p className="text-gray-500 dark:text-gray-400">
              {message}
            </p>

          </div>
        </div>
      )}

      {/* Newsletter Section */}
      <div className="px-6 py-10 border-b border-white/10">
        <h3 className="text-white text-xl font-black tracking-tight uppercase italic mb-2">Stay Connected</h3>
        <p className="text-gray-400 text-sm mb-4">Get updates on events, services & more.</p>
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"} 
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
          <button 
            type="submit"
            disabled={status === "loading" || status === "success"} 
            className={`bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-sm font-bold transition-all active:scale-95 ${status === "loading" || status === "success" ? "opacity-50 cursor-not-allowed" : ""}`}
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