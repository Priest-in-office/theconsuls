import GridCard from "./GridCard"
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
          <GridCard
            image={testImage2}
            label="Hangouts"
            aspectRatio="3/4"
            hasHoverEffect={true}
          />
          <GridCard
            image={testImage3}
            label="Music"
            aspectRatio="square"
          />
        </div>
        <div className="flex flex-col gap-4 pt-8">
          <GridCard
            image={testImage4}
            label="Groups"
            aspectRatio="square"
          />
          <GridCard
            image={testImage5}
            label="Impact"
            aspectRatio="3/4"
          />
        </div>
      </div>
    </section>
  );
}