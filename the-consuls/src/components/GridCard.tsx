interface GridCardProps {
  image: string;
  label: string;
  aspectRatio?: "square" | "3/4";
  hasHoverEffect?: boolean;
}

export default function GridCard({ image, label, aspectRatio = "square", hasHoverEffect = false }: GridCardProps) {
  const aspectClasses = {
    "square": "aspect-square",
    "3/4": "aspect-[3/4]"
  }

  return (
    <div 
      className={`bg-cover bg-center flex flex-col gap-3 rounded-2xl justify-end p-4 group relative overflow-hidden ${aspectClasses[aspectRatio]} ${hasHoverEffect ? "group" : ""}`}
      data-alt="Group of teens laughing together" 
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(16,22,34,0.8) 0%, rgba(0,0,0,0) 50%), url(${image})`
      }}
    >
      {hasHoverEffect && (
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      )}
      <p className="text-white text-lg font-black leading-tight z-10 uppercase italic">{label}</p>
    </div>
  )
}