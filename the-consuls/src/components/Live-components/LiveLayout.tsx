import type { ReactNode } from 'react';
import BottomNav from '../BottomNav';

interface LayoutProps {
  children: ReactNode
}

export default function LiveLayout({ children }: LayoutProps) {
  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark text-white font-display min-h-screen">
      <main className="flex flex-col pb-12 max-w-md mx-auto px-4 overflow-x-hidden">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}