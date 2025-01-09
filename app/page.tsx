import CycleventureLogo from "@/app/ui/cycleventure-logo";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center gap-6 bg-background text-text">
      <div className="z-0 absolute top-0 left-0 w-full h-full bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desktop bg-no-repeat bg-bottom bg-cover"></div>
      <div className="absolute w-full h-full bg-black bg-opacity-30 z-10"></div>
      <div className="w-full flex items-center justify-center py-8 px-2 z-50">
        <CycleventureLogo />
      </div>
      <div className="w-full flex flex-col items-center justify-start z-50 px-8 py-6 gap-6">
        <div className="flex flex-col items-start justify-center font-black text-5xl gap-2">
          <div>Experience,</div>
          <div>Explore,</div>
          <div>Enjoy Life!</div>
        </div>
        <div className="text-left text-base">
          Whether it's on pavement, on gravel or off-road, we have you covered.
          With the best bikes and equipment, you can make your adventure your own.
        </div>
        <div className="w-full flex items-center justify-center">
          <input
            type="button"
            value="Shop Now!"
            className="w-full px-9 py-4 bg-accent text-black font-medium rounded-xl"
          />
        </div>
      </div>
    </div >
  );
}
