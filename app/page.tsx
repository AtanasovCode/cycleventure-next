import Image from "next/image";
import Link from "next/link";
import CycleventureLogo from "@/app/ui/cycleventure-logo";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-start gap-24 py-8 bg-background text-text">
      <div className="w-full flex items-center justify-center z-50">
        <CycleventureLogo />
      </div>
      <div className="w-full flex flex-col items-center justify-center z-50 gap-16 lg:gap-20 xl:gap-24 px-8 md:px-12 lg:px-20 xl:px-28 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <div className={`flex flex-col items-start justify-center font-bold text-5xl lg:text-6xl`}>
            Explore, Experience, Enjoy Life!
          </div>
          <div className="text-left text-base">
            Whether it&apos;s on pavement, on gravel or off-road, we have you covered.
            With the best bikes and equipment, you can make your adventure your own.
          </div>
          <div className="w-full flex items-center justify-center">
            <Link
              href="/products"
              className="w-full px-12 py-4 bg-accent text-black font-bold rounded-xl cursor-pointer flex items-center justify-center"
            >
              Shop Now!
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl overflow-hidden md:w-2/3  lg:w-1/2">
          <Image
            src="/hero-mobile.jpg"
            width={640}
            height={427}
            alt="hero image mobile"
            className="block md:hidden"
          />
          <Image
            src="/hero-tablet.jpg"
            width={1920}
            height={1280}
            alt="hero image mobile"
            className="hidden md:block xl:hidden"
          />
          <Image
            src="/hero-desktop.jpg"
            width={2400}
            height={1600}
            alt="hero image mobile"
            className="hidden xl:block"
          />
        </div>
      </div>
    </div >
  );
}
