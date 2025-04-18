import Image from "next/image";
import clsx from "clsx";
import { useProductStore } from "@/useProductStore";

type SelectProps = {
    photos: string[];
    currentPhotoIdx: number;
    setCurrentPhotoIdx: (value: number) => void;
}

export default function PhotoSelect() {

    const {
        product,
        currentPhotoIdx,
        setCurrentPhotoIdx,
    } = useProductStore();

    return (
        <div className="flex flex-wrap items-center justify-start gap-2">
            {product?.photos.map((photo, idx) => {
                return (
                    <div
                        key={idx}
                        className="relative flex items-center justify-center cursor-pointer"
                        onClick={() => setCurrentPhotoIdx(idx)}
                    >
                        <Image
                            src={photo}
                            width={600}
                            height={800}
                            alt="photo"
                            className="max-w-16 md:max-w-20 lg:max-w-24"
                        />
                        <div 
                            className={clsx(
                                "absolute w-full h-full bg-white bg-opacity-25",
                                {
                                    "hidden": currentPhotoIdx !== idx,
                                    "inline-block": currentPhotoIdx === idx
                                }
                            )}
                        />
                    </div>
                );
            })}
        </div>
    );
}