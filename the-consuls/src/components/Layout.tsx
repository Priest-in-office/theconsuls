import type { ReactNode }  from "react";
import BottomNav from "./BottomNav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex-1">
      <main className="pt-20 pb-12 max-w-md mx-auto px-4 overflow-x-hidden">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}