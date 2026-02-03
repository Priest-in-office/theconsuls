export default function ServiceTimes() {
  return (
    <section className="mt-12 mb-8">
      <h2 className="text-white text-3xl font-black tracking-tighter uppercase italic leading-none mb-6">Pull Up</h2>
      <div className="flex flex-col gap-3">
        <div className="glass p-5 rounded-2xl flex items-center justify-between border-l-4 border-primary">
          <div className="flex items-center gap-4">
            <div className="bg-primary/20 text-primary p-3 rounded-xl">
              <span className="material-symbols-outlined">calendar_today</span>
            </div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Sunday Service</p>
                <p className="text-xl font-black">11:00 AM</p>
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
              <p className="text-xs font-bold text-accent-neon uppercase tracking-widest">Midweek Vibes</p>
              <p className="text-xl font-black">Wednesday @ 7 PM</p>
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