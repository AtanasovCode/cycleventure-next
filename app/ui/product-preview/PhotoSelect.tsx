import Image from "next/image";
import clsx from "clsx";

type SelectProps = {
    photos: string[];
    currentPhotoIdx: number;
}

export default function PhotoSelect({ photos, currentPhotoIdx }: SelectProps) {
    return (
        <div className="w-full flex items-center justify-start gap-1">
            {photos.map((photo, idx) => {
                return (
                    <div className="relative flex items-center justify-center">
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