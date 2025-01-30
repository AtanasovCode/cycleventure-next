'use client';


import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type ImageSet = {
  mobile: string;
  tablet: string;
  desktop: string;
  alt: string;
}

type Images = Record<string, ImageSet>;

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  // Define image mapping based on routes
  const images: Images = {
    "/sign-in": {
      mobile: "/auth-mobile.jpg",
      tablet: "/auth-tablet.jpg",
      desktop: "/auth-desktop.jpg",
      alt: "Photo of a mountain bike"
    },
    "/sign-up": {
      mobile: "/signup-mobile.jpg",
      tablet: "/signup-tablet.jpg",
      desktop: "/signup-desktop.jpg",
      alt: "photo of a mountain bike"
    },
    "/forgot-password": {
      mobile: "/forgot-mobile.jpg",
      tablet: "/forgot-tablet.jpg",
      desktop: "/forgot-desktop.jpg",
      alt: "Photo of a group of 3 riders on mountain bikes climibing up a hill"
    },
  };

  // Default to sign-in images if route is not mapped
  const selectedImages = images[pathname] || images["/sign-in"];

  return (
    <div className="h-dvh flex items-start justify-center bg-background">
      <div className="flex items-center justify-center max-h-dvh overflow-hidden">
        <Image
          src={selectedImages.mobile}
          width={640}
          height={800}
          alt={selectedImages.alt}
          className="block md:hidden"
        />
        <Image
          src={selectedImages.tablet}
          width={1920}
          height={1295}
          alt={selectedImages.alt}
          className="hidden md:block xl:hidden"
        />
        <Image
          src={selectedImages.desktop}
          width={2400}
          height={1619}
          alt={selectedImages.alt}
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
