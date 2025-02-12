import clsx from "clsx";
import AlertIcon from "@/app/assets/icons/alert-icon.svg";

type SizeProps = {
    sizes: string[];
    selectedSize: string | null;
    setSelectedSize: (value: string) => void;
    sizeError: boolean;
    setSizeError: (value: boolean) => void;
}

export default function SizeSelect({
    sizes,
    selectedSize,
    setSelectedSize,
    sizeError,
    setSizeError,
}: SizeProps) {
    return (
        <div className="w-full flex flex-col items-start justify-center gap-4 mt-4">
            <div className="font-bold relative w-full flex flex-col items-start justify-center gap-2">
                <p>
                    Size
                </p>
                <div
                    className={clsx(
                        "w-full text-sm text-accent text-left flex items-center justify-start gap-1",
                        {
                            "hidden": !sizeError,
                            "shown": sizeError
                        }
                    )}
                >
                    <AlertIcon className="w-6 h-auto" />
                    <p>
                        Please select frame size before adding to cart.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-4">
                {
                    sizes.map((size) => {
                        return (
                            <div
                                key={size}
                                className={clsx(
                                    "w-full flex items-center justify-center border p-2 rounded-md cursor-pointer",
                                    {
                                        "border-slate-500": selectedSize !== size,
                                        "border-accent border-2": selectedSize === size
                                    }
                                )}
                                onClick={() => {
                                    setSizeError(false)
                                    setSelectedSize(size)
                                }}
                            >
                                {size}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
} 