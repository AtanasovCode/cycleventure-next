import { useState, useEffect } from "react";
import MainPhoto from "@/app/ui/product-preview/MainPhoto";
import PhotoSelect from "@/app/ui/product-preview/PhotoSelect";
import { useProductStore } from "@/useProductStore";


export default function PhotoPreview() {

    const {
        product,
    } = useProductStore();

    useEffect(() => {
        const preloadImage = (src: string) => {
            const img = new Image();
            img.src = src;
        };

        product?.photos.forEach((photo) => {
            preloadImage(photo);
        })
    }, []);

    return (
        <div className="flex flex-col gap-2 items-start justify-start">
            <MainPhoto />
            <PhotoSelect />
        </div>
    );
}