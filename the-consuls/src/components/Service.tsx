export default function ServiceTimes() {
  return (
    <section className="mt-12 mb-8">
      <div className="flex items-end justify-between mb-6 px-2">
        <div className="h-1 flex-1 bg-primary/20 mr-4 mb-2 rounded-full"></div>
        <h2 className="text-white text-3xl font-black tracking-tighter uppercase italic leading-none">Pull Up</h2>
      </div>
      <div className="flex flex-col gap-3">
        <div className="glass p-5 rounded-2xl flex items-center justify-between border-l-4 border-primary">
          <div className="flex items-center gap-4">
            <div className="bg-primary/20 text-primary p-3 rounded-xl">
              <span className="material-symbols-outlined">calendar_today</span>
            </div>
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest">Sunday Service</p>
              <p className="text-xl font-black">12:30 PM</p>
            </div>
          </div>
          <button className="bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-white">add</span>
          </button>
        </div>
        <div className="glass p-5 rounded-2xl flex items-center justify-between border-l-4 border-accent-neon">
          <div className="flex items-center gap-4">
            <div className="bg-accent-neon/20 text-accent-neon p-3 rounded-xl">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <div>
              <p className="text-xs font-bold text-accent-neon uppercase tracking-widest">Midweek Service</p>
              <p className="text-xl font-black">Wednesdays @ 6 PM</p>
            </div>
          </div>
          <button className="bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-white">add</span>
          </button>
        </div>
      </div>
    </section>
  )
}