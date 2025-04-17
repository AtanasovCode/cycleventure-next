import { useState, useEffect } from "react";
import MainPhoto from "@/app/ui/product-preview/MainPhoto";
import PhotoSelect from "@/app/ui/product-preview/PhotoSelect";

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

    const [currentPhotoIdx, setCurrentPhotoIdx] = useState<number>(0);

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

    return (
        <div className="flex flex-col gap-2 items-start justify-start">
            <MainPhoto 
                photos={photos} 
                currentPhotoIdx={currentPhotoIdx}
                setCurrentPhotoIdx={setCurrentPhotoIdx}
                brand={brand}
                name={name}
            />
            <PhotoSelect 
                photos={photos}
                currentPhotoIdx={currentPhotoIdx}
                setCurrentPhotoIdx={setCurrentPhotoIdx}
            />
        </div>
    );
}