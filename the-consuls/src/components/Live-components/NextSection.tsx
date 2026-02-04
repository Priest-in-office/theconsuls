export default function NextSection() {
  return (
    <div className="p-1 mt-5 mx-0">
      <h3 className="text-lg font-bold mb-4 text-left">Coming Up Next</h3>
      <div className="flex gap-4 bg-white/5 p-3 rounded-2xl border border-white/5">
        <div className="w-32 aspect-video rounded-lg overflow-hidden shrink-0 relative">
          <img alt="Concert lights" className="w-full h-full object-cover" data-alt="Next event preview featuring bright stage lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDGA9Mm04KOeP8WzH0WFI6J-bMmd7Z_6mdc11XZyEibM1JevlJTP8ASzUhmT2d-1NQbvNUtUM9Q5hw4BiGYhQVYTJXJAmaXmwDgwkL-RmZq_wA0Cv0Ro2Ds59sFefnWFNfmBUntTs4KYywOf116oa50O4I0OvWym5-BBVLSdxVR5RzhZ7axwwJV5q7FmmVd3XhtOfRmp6022e-5vZsuB_0FQxtEnA_h9Dff8GIrANaa59IYVJO-w8pnct2e0wBFQXQ4uhQL3iUheg"/>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-[10px] font-bold">19:30</span>
          </div>        
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold leading-snug">Friday Night Lights: Acoustic Worship</p>
          <p className="text-xs text-white/50 mt-1">Starts in 2 hours</p>
          <button className="text-primary text-xs font-bold mt-2 flex items-center gap-1">
            <span className="material-symbols-outlined !text-sm">notifications</span>
            Remind Me
          </button>
        </div>
      </div>
    </div>
  )
}