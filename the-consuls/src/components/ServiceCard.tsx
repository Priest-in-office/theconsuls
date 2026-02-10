interface CardProps {
  title: string;
  time: string;
  icon: string;
  accentColour: string;
}

export default function Card({ title, time, icon, accentColour }: CardProps) {
  return (
    <div 
      className="glass p-5 rounded-2xl flex items-center justify-between mb-3" 
      style={{ 
        border: `1px solid ${accentColour}`,
        borderLeftWidth: "6px"
      }}>
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl" style={{ backgroundColor: `${accentColour}33`, color: accentColour }}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
          <p className="text-xs font-bold text-primary uppercase tracking-widest">{title}</p>
          <p className="text-xl font-black">{time}</p>
        </div>
      </div>
      <button className="bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors">
        <span className="material-symbols-outlined text-white">add</span>
      </button>
    </div>
  )
}