import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  badge?: string;
}

export default function AuthLayout({ children, title, subtitle, badge = "Welcome Back!"}: AuthLayoutProps) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Top Hero Section */}
        <div className="relative h-[35vh] w-full gradient-bg flex flex-col justify-end p-8 pb-16">
          <div 
            className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "20px 20px"
            }}
          />
          <div className="relative z-10">
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
              {badge}
            </span>
            <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight">{title}</h1>
            <p className="text-white/80 text-sm mt-2 font-medium">{subtitle}</p>
          </div>
        </div>
        {/* Auth Form Card */}
        <div className="relative -mt-10 flex-1 bg-white dark:bg-[#1a1a2e] rounded-t-[3rem] px-6 pt-10 pb-8 shadow-2xl">
          <div className="max-w-[480px] mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}