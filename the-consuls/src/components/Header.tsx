import logo from '../images/IMG_1415.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './SignIn-Components/AuthContext';

export default function Header() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleClick = () => {
    if (user) {
      navigate('/live')
    } else {
      navigate('/signup')
    }
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="flex items-center p-4 justify-between max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 p-1 rounded-full">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" data-alt="Abstract vibrant geometric church logo" style={{ backgroundImage:`url(${logo})`}}></div>
          </div>
          <h2 className="text-white text-lg font-extrabold leading-tight tracking-tighter">The Consuls</h2>
        </div>
        <button onClick={handleClick} className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-bold transition-all">{user ? "Watch Live" : "Join"}</button>
      </div>
    </header>
  )
}