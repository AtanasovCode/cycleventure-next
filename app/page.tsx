import CycleventureLogo from "@/app/ui/cycleventure-logo";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center gap-12 bg-background text-text">
      <div className="w-full flex items-center justify-center py-8 border-b-2 border-secondary">
        <CycleventureLogo />
      </div>
      <div className="w-[100vw] h-[30dvh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desktop bg-no-repeat bg-right-bottom bg-cover"></div>
      </div>
    </div >
  );
}
