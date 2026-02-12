import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navItems } from '../config/navigation';
import { useAuth } from './SignIn-Components/AuthContext';


export default function BottomNav() { const { user } = useAuth(); const [isVisible, setIsVisible] = useState(true); const [lastScrollY, setLastScrollY] = useState(0); const navigate = useNavigate(); const location = useLocation();
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
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[360px] z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-24'
      }`}
    >
      <div className="glass rounded-full px-6 py-4 flex items-center justify-between shadow-2xl shadow-black/50">
        {navItems.map((item) => (
          <button 
            key={item.path}
            onClick={() => user ? navigate(item.path) : navigate("/login")}
            className={`flex flex-col items-center transition-transform active:scale-90 ${
              location.pathname === item.path ? 'text-primary' : 'text-gray-400 hover:text-white'
            }`}
          >
            <span 
              className="material-symbols-outlined text-2xl" 
              style={{
                fontVariationSettings: location.pathname === item.path ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {item.icon}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}