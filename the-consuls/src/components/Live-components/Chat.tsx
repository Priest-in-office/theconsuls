export default function Chat() {
  return (
    <div className="flex flex-col flex-1 bg-white/5 rounded-t-xl pt-0.5 mt-4 mx-0 border-x border-t border-white/10 min-h-[400px]">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <span className="font-bold text-sm uppercase tracking-widest text-white/50">Community Chat</span>
        <span className="material-symbols-outlined text-white/40">expand_more</span>
      </div>
      
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {/* Chat Message */}
        <div className="flex gap-3">
          <div className="size-8 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 border border-white/20 shrink-0" data-alt="User avatar pink yellow gradient"></div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white/40">Sarah J.</span>
            <div className="bg-white/10 px-4 py-2 rounded-2xl rounded-tl-none">
              <p className="text-sm">This is exactly what I needed to hear today! 🔥</p>
            </div>
          </div>
        </div>

        {/* Chat Message */}
        <div className="flex gap-3">
          <div className="size-8 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-300 border border-white/20 shrink-0" data-alt="User avatar blue cyan gradient"></div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white/40">Mark Peterson</span>
            <div className="bg-white/10 px-4 py-2 rounded-2xl rounded-tl-none">
              <p className="text-sm">Preach! 🙌</p>
            </div>
          </div>
        </div>

        {/* System Message */}
        <div className="flex justify-center py-2">
          <span className="text-[10px] bg-primary/20 text-primary px-3 py-1 rounded-full font-bold">Liam just joined the stream!</span>
        </div>

        {/* Chat Message */}
        <div className="flex gap-3">
          <div className="size-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 border border-white/20 shrink-0" data-alt="User avatar purple indigo gradient"></div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white/40">Alex Chen</span>
            <div className="bg-white/10 px-4 py-2 rounded-2xl rounded-tl-none">
              <p className="text-sm">Where can I get the notes from this talk?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reaction Bubbles & Chat Input */}
      <div className="p-4 bg-background-dark">
        <div className="flex gap-2 mb-4">
          <button className="bg-white/5 hover:bg-white/20 size-10 rounded-full flex items-center justify-center text-xl transition-all border border-white/10">🔥</button>
          <button className="bg-white/5 hover:bg-white/20 size-10 rounded-full flex items-center justify-center text-xl transition-all border border-white/10">❤️</button>
          <button className="bg-white/5 hover:bg-white/20 size-10 rounded-full flex items-center justify-center text-xl transition-all border border-white/10">🙌</button>
          <button className="bg-white/5 hover:bg-white/20 size-10 rounded-full flex items-center justify-center text-xl transition-all border border-white/10">🙏</button>
        </div>
        <div className="relative">
          <input className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none pr-12" placeholder="Say something..." type="text"/>
          <button className="absolute right-2 top-1.5 size-9 bg-primary rounded-full flex items-center justify-center text-white">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </div>
  )
}