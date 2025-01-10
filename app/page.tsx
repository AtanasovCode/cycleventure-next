import Image from "next/image";
import CycleventureLogo from "@/app/ui/cycleventure-logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start gap-6 bg-background text-text px-8">
      <div className="w-full flex items-center justify-center py-8 z-50">
        <CycleventureLogo />
      </div>
      <div className="w-full flex flex-col items-center justify-center z-50 gap-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className={`flex flex-col items-start justify-center font-bold text-4xl`}>
            Explore, Experience, Enjoy Life!
          </div>
          <div className="text-left text-base">
            Whether it's on pavement, on gravel or off-road, we have you covered.
            With the best bikes and equipment, you can make your adventure your own.
          </div>
          <div className="w-full flex items-center justify-center">
            <input
              type="button"
              value="Shop Now!"
              className="w-full px-12 py-4 bg-accent text-black font-medium rounded-xl cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl overflow-hidden">
          <Image 
            src="/hero-mobile.jpg"
            width={640}
            height={427}
            alt="hero image mobile"
            className="block md:hidden"
          />
        </div>
      </div>
    </div >
  );
}
