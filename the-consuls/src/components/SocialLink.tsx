interface SocialLinkProps {
  url: string;
  icon: React.ReactNode;
  label: string;
}

export default function SocialLink({ url, icon, label }: SocialLinkProps) {
  return (
    <a 
      href={url} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-primary/20 p-3 rounded-full transition-colors group" aria-label={label}
    >
      <span className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors block [&>svg]:w-full [&>svg]:h-full">{icon}</span>
    </a>
  )
}