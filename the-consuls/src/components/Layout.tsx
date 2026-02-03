import type { ReactNode }  from "react";
import BottomNav from "./BottomNav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="pt-20 pb-24 max-w-md mx-auto px-4 overflow-x-hidden">
        {children}
      </main>
      <BottomNav />
      <div className="h-20 bg-background-dark" />
    </>
  )
}