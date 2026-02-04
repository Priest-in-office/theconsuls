import map from '../images/map.png';
import map2 from '../images/map2.png';

export default function Location() {
  return (
    <section className="mt-8 mb-12">
      <div className="relative h-48 rounded-2xl overflow-hidden bg-gray-800" data-location="Los Angeles, USA" style={{backgroundImage: `url(${map})`}}>
        <div className="absolute inset-0 grayscale opacity-40 mix-blend-overlay" data-alt="Stylized city map background" style={{backgroundImage: `url(${map2})`, backgroundSize: 'cover'}}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</p>
          <p className="text-lg font-black text-white">Downtown Campus, 5th Ave</p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary p-3 rounded-full shadow-lg shadow-primary/50">
            <span className="material-symbols-outlined text-white text-3xl">location_on</span>
          </div>
        </div>
      </div>
    </section>
  )
}