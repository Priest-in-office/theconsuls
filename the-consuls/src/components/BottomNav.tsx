export default function BottomNav(){
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w- z-50">
      <div className="glass rounded-full px-6 py-4 flex items-center justify-between shadow-2xl shadow-black/50">
        <button className="text-primary flex flex-col items-center transition-transform active:scale-90">
        <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
        </button>
        <button className="text-gray-400 hover:text-white flex flex-col items-center transition-transform active:scale-90">
        <span className="material-symbols-outlined text-2xl">group</span>
        </button>
        <button className="text-gray-400 hover:text-white flex flex-col items-center transition-transform active:scale-90">
        <span className="material-symbols-outlined text-2xl">play_circle</span>
        </button>
        <button className="text-gray-400 hover:text-white flex flex-col items-center transition-transform active:scale-90">
        <span className="material-symbols-outlined text-2xl">person</span>
        </button>
      </div>
    </nav>
  )
}