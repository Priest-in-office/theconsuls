import testImage2 from '../images/test-image.png';
import testImage3 from '../images/test-image3.png';
import testImage4 from '../images/test-image4.png';
import testImage5 from '../images/test-image5.png';

export default function Grid() {
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-white text-3xl font-black tracking-tighter uppercase italic leading-none">What We Do</h2>
        <div className="h-1 flex-1 bg-primary/20 ml-4 mb-2 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <div 
            className="bg-cover bg-center flex flex-col gap-3 rounded-2xl justify-end p-4 aspect-[3/4] group relative overflow-hidden" 
            data-alt="Group of teens laughing together" 
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(16,22,34,0.8) 0%, rgba(0,0,0,0) 50%), url(${testImage2})`
            }}
          >
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-white text-lg font-black leading-tight z-10 uppercase italic">Hangouts</p>
          </div>
          <div 
            className="bg-cover bg-center flex flex-col gap-3 rounded-2xl justify-end p-4 aspect-square relative overflow-hidden" 
            data-alt="Modern worship band on stage" 
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(16,22,34,0.8) 0%, rgba(0,0,0,0) 50%), url(${testImage3})`
            }}
          >
            <p className="text-white text-lg font-black leading-tight z-10 uppercase italic">Music</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-8">
          <div 
            className="bg-cover bg-center flex flex-col gap-3 rounded-2xl justify-end p-4 aspect-square relative overflow-hidden" 
            data-alt="Teens in a small group discussion" 
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(16,22,34,0.8) 0%, rgba(0,0,0,0) 50%), url(${testImage4})`
            }}
          >
            <p className="text-white text-lg font-black leading-tight z-10 uppercase italic">Groups</p>
          </div>
          <div 
            className="bg-cover bg-center flex flex-col gap-3 rounded-2xl justify-end p-4 aspect-[3/4] relative overflow-hidden" 
            data-alt="Teenager speaking on stage" 
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(16,22,34,0.8) 0%, rgba(0,0,0,0) 50%), url(${testImage5})`
            }}
          >
            <p className="text-white text-lg font-black leading-tight z-10 uppercase italic">Impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}