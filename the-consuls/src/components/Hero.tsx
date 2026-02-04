import testImage from '../images/test-image.png';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const isLoggedIn = true;

  const handleWatchLive = () => {
    if (isLoggedIn) {
      navigate('/live')
    } else {
      navigate('/signup')
    }
  }

  return (
    <section className="mt-4">
      <div className="relative overflow-hidden rounded-xl">
        <div className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-12 " 
        data-alt="Vibrant worship concert with neon lights" 
        style={{
          backgroundImage: 
          `linear-gradient(rgba(0,0,0,0.1) 0%, rgba(16,22,34,0.95) 100%), url(${testImage})`
        }}>
          <div className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[10px] font-black tracking-widest uppercase">Live Now</span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-5xl font-black leading-[0.9] tracking-tighter uppercase italic text-left">Welcome<br/>To<br/>CE Omole Teens Church</h1>
            <p className="text-gray-300 text-sm font-medium max-w-[80%] leading-relaxed text-left">Experience worship like never before. <br/>
              <span className="text-primary font-bold">Series: THE NEW ERA.</span>
            </p>
          </div>
          <button onClick={handleWatchLive} className="pulse-live flex items-center gap-3 bg-primary text-white rounded-full py-4 px-8 font-extrabold text-base tracking-wide uppercase transition-transform active:scale-95">
            <span className="material-symbols-outlined">play_circle</span>
            Watch Live
          </button>
        </div>
      </div>
    </section>
  )
}