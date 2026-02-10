import { useNavigate } from "react-router-dom"

export default function TopBar() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <div className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-white/5">
      <div onClick={handleBackClick} className="text-white flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
        <span className="material-symbols-outlined">arrow_back_ios_new</span>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-white text-base font-bold leading-tight tracking-tight">Live Stream</h2>
        <div className="flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-red-500 animate-pulse"></span>
        <span className="text-xs font-medium text-white/60">1.4k Watching</span>
      </div>
    </div>
    <div className="flex w-10 items-center justify-end">
      <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white">
        <span className="material-symbols-outlined">group</span>
      </button>
    </div>
  </div>
  )
}