import { useState, useEffect } from "react";
import NextImage from "next/image";
import ArrowLeft from "@/app/assets/icons/arrow-left-fancy.svg";
import ArrowRight from "@/app/assets/icons/arrow-right-fancy.svg";

type PhotoProps = {
    photos: string[];
    brand: string;
    name: string;
}

export default function PhotoPreview({
    photos,
    brand,
    name,
}: PhotoProps) {

    const [currentPhotoIdx, setCurrentPhotoIdx] = useState<number>(1);

    const preloadImage = (src: string) => {
        const img = new Image();
        img.src = src;
    };

    useEffect(() => {
        photos.forEach((photo) => {
            preloadImage(photo);
        })
    }, []);

    useEffect(() => { }, [])

    const prevPhoto = () => {
        setCurrentPhotoIdx((prevIdx) => prevIdx === 0 ? photos.length - 1 : prevIdx - 1)
    }

    const nextPhoto = () => {
        setCurrentPhotoIdx((prevIdx) => prevIdx === photos.length - 1 ? 0 : prevIdx + 1)
    }

    // Listen for global keydown events
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prevPhoto();
            if (e.key === "ArrowRight") nextPhoto();
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);


    return (
        <div className="flex items-center justify-center relative">
            <div
                className="absolute top-1/2 -left-4 md:left-6 -translate-y-1/2 bg-primary flex items-center justify-center p-1 rounded-full cursor-pointer border-[.4rem] border-background"
                onClick={() => prevPhoto()}
                onKeyDown={(e) => e.key === "Enter" || e.key === "" ? prevPhoto() : null}
                role="button"
                tabIndex={0}
            >
                <ArrowLeft className="w-5 md:w-8 h-auto" />
            </div>
            <NextImage
                src={photos[currentPhotoIdx]}
                alt={`Photo of bike: ${name}, bike brand: ${brand}`}
                width={1920}
                height={1440}
                className="lg:w-[90%]"
            />
            <div
                className="absolute top-1/2 -right-4 md:right-6 -translate-y-1/2 bg-primary flex items-center justify-center p-1 rounded-full cursor-pointer border-[.4rem] border-background"
                onClick={() => nextPhoto()}
                onKeyDown={(e) => e.key === "Enter" || e.key === "" ? nextPhoto() : null}
                role="button"
                tabIndex={0}
            >
                <ArrowRight className="w-5 md:w-8 h-auto" />
            </div>
        </div>
    );
}