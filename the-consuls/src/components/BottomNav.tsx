import { useState, useEffect } from 'react';

export default function BottomNav(){
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);


  return (
    <nav className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-24'}`}>
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