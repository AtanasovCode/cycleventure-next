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

    useEffect(() => {}, [])

    const prevPhoto = () => {
        if (currentPhotoIdx === 0) {
            setCurrentPhotoIdx(photos.length - 1)
            return;
        }

        setCurrentPhotoIdx(currentPhotoIdx - 1);
    }

    const nextPhoto = () => {
        if (currentPhotoIdx === photos.length - 1) {
            setCurrentPhotoIdx(0)
            return;
        }

        setCurrentPhotoIdx(currentPhotoIdx + 1);
    }


    return (
        <div className="flex items-center justify-center relative">
            <div
                className="absolute top-1/2 left-0 md:left-6 -translate-y-1/2 bg-background flex items-center justify-center p-2 rounded-full cursor-pointer"
                onClick={() => prevPhoto()}
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
                className="absolute top-1/2 right-0 md:right-6 -translate-y-1/2 bg-background flex items-center justify-center p-2 rounded-full cursor-pointer"
                onClick={() => nextPhoto()}
            >
                <ArrowRight className="w-5 md:w-8 h-auto" />
            </div>
        </div>
    );
}