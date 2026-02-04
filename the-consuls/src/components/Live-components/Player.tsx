import testpastor from '../../images/test-pastor.png';

export default function Player() {
  return (
    <>
      <div className="w-full bg-black">
        <div className="relative aspect-video w-full overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center" data-alt="Pastor speaking on a modern illuminated stage" style={{backgroundImage: `url(${testpastor})`}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          </div>
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-[0_0_15px_rgba(220,38,38,0.5)]">Live</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-white/20 backdrop-blur-md text-white border border-white/30 hover:scale-110 transition-transform">
              <span className="material-symbols-outlined !text-4xl fill-current">play_arrow</span>
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 px-4 py-4">
            <div className="flex h-1 items-center justify-center mb-1">
              <div className="h-1 flex-1 rounded-full bg-primary shadow-[0_0_10px_#0d59f2]"></div>
              <div className="h-1 w-24 rounded-full bg-white opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-0.5 pt-6 text-left">
        <h1 className="text-white text-2xl font-extrabold tracking-tight">Finding Your Purpose</h1>
        <p className="text-primary text-sm font-semibold mb-3">with Pastor Chris • Youth Session</p>
        <p className="text-white/70 text-base font-normal leading-relaxed pb-4">
          Join us for an electrifying session on navigating the big questions of life. Explore your unique calling in today's world.
        </p>
        <div className="flex gap-4 pb-6 overflow-x-auto hide-scrollbar">
          <button className="flex items-center gap-2 bg-primary px-4 py-2 rounded-full font-bold text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">share</span>
            <span>Share</span>
          </button>
          <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full font-bold text-white">
            <span className="material-symbols-outlined text-red-500 fill-current">favorite</span>
            <span>1.2k</span>
          </button>
          <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full font-bold text-white">
            <span className="material-symbols-outlined">add_circle</span>
            <span>Join Group</span>
          </button>
        </div>
      </div>
    </>
  )
}