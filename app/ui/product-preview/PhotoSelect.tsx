import Image from "next/image";
import clsx from "clsx";

type SelectProps = {
    photos: string[];
    currentPhotoIdx: number;
    setCurrentPhotoIdx: (value: number) => void;
}

export default function PhotoSelect({
    photos, 
    currentPhotoIdx,
    setCurrentPhotoIdx, 
}: SelectProps) {
    return (
        <div className="flex items-center justify-start gap-1">
            {photos.map((photo, idx) => {
                return (
                    <div 
                        className="relative flex items-center justify-center cursor-pointer"
                        onClick={() => setCurrentPhotoIdx(idx)}
                    >
                        <Image
                            src={photo}
                            width={600}
                            height={800}
                            alt="photo"
                            className="max-w-24"
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