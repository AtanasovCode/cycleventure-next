import { useEffect } from "react";
import NextImage from "next/image";
import ArrowLeft from "@/app/assets/icons/arrow-left-fancy.svg";
import ArrowRight from "@/app/assets/icons/arrow-right-fancy.svg";
import { useProductStore } from "@/useProductStore";

export default function MainPhoto() {

    const {
        product,
        currentPhotoIdx,
        setCurrentPhotoIdx,
    } = useProductStore();

    const prevPhoto = () => {
        // setCurrentPhotoIdx((prevIdx) => prevIdx === 0 ? photos.length - 1 : prevIdx - 1)
        setCurrentPhotoIdx(currentPhotoIdx === 0 ? (product?.photos?.length ?? 1) - 1 : currentPhotoIdx - 1);
    }

    const nextPhoto = () => {
        // setCurrentPhotoIdx((prevIdx) => prevIdx === photos.length - 1 ? 0 : prevIdx + 1)
        setCurrentPhotoIdx(currentPhotoIdx === (product?.photos?.length ?? 1) - 1 ? 0 : currentPhotoIdx + 1);
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
                className="absolute top-1/2 -left-4 -translate-y-1/2 bg-accent flex items-center justify-center p-1 rounded-full cursor-pointer border-[.4rem] border-background"
                onClick={() => prevPhoto()}
                onKeyDown={(e) => e.key === "Enter" || e.key === "" ? prevPhoto() : null}
                role="button"
                tabIndex={0}
            >
                <ArrowLeft className="w-5 md:w-8 h-auto" />
            </div>
            {
                product?.photos[currentPhotoIdx] ? (
                    <NextImage
                        src={product?.photos[currentPhotoIdx]}
                        alt={`Photo of bike: ${product?.name}, bike brand: ${product?.brand}`}
                        width={1920}
                        height={1440}
                        className=""
                    />
                ) : (
                    <div>
                        Couldn't find photo
                    </div>
                )
            }
            <div
                className="absolute top-1/2 -right-4 -translate-y-1/2 bg-accent flex items-center justify-center p-1 rounded-full cursor-pointer border-[.4rem] border-background"
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