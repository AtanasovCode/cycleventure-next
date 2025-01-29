import Image from "next/image";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh flex items-start justify-center bg-background">
      <div className="flex items-center justify-center max-h-dvh overflow-hidden">
        <Image
          src="/auth-mobile.jpg"
          width={640}
          height={800}
          alt="authentication image of a man and a mountain bike on a mountain"
          className="block md:hidden"
        />
        <Image
          src="/auth-tablet.jpg"
          width={1920}
          height={1295}
          alt="authentication image of a man and a mountain bike on a mountain"
          className="hidden md:block xl:hidden"
        />
        <Image
          src="/auth-desktop.jpg"
          width={2400}
          height={1619}
          alt="authentication image of a man and a mountain bike on a mountain"
          className="hidden xl:block"
        />
      </div>
      <div className="min-h-dvh flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-10 px-16 py-4">
          {children}
        </div>
      </div>
    </div>
  );
}
