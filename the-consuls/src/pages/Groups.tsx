import BottomNav from '../components/BottomNav';

export default function Groups() {
  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark text-white font-display min-h-screen">
      <main className="flex flex-col pb-12 max-w-md mx-auto px-4 overflow-x-hidden">
        <h1 className="text-3xl font-bold mt-8">Groups</h1>
        <p className="mt-4 text-sm text-white/80">This page is under construction. Stay tuned for updates!</p>
      </main>
      <BottomNav />
    </div>
  )
}