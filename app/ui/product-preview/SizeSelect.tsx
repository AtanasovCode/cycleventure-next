import clsx from "clsx";
import AlertIcon from "@/app/assets/icons/alert-icon.svg";
import Checkmark from "@/app/assets/icons/checkmark.svg";
import { useProductStore } from "@/useProductStore";

type SizeProps = {
    sizeError: boolean;
    setSizeError: (value: boolean) => void;
}

export default function SizeSelect({
    sizeError,
    setSizeError,
}: SizeProps) {

    const {
        product,
        selectedSize,
        setSelectedSize,
    } = useProductStore();

    return (
        <div className="w-full flex flex-col items-start justify-center gap-4 mt-4">
            <div className="font-bold relative w-full flex flex-col items-start justify-center gap-2">
                <p>
                    Size
                </p>
                <div
                    className={clsx(
                        "w-full text-sm text-text text-left flex items-center justify-start gap-1",
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
                    product?.sizes.map((size) => {
                        return (
                            <div
                                key={size}
                                className={clsx(
                                    "w-full flex items-center justify-center border p-2 rounded-md cursor-pointer relative",
                                    {
                                        "border-slate-500": selectedSize !== size,
                                        "border-text": selectedSize === size
                                    }
                                )}
                                onClick={() => {
                                    setSizeError(false)
                                    setSelectedSize(size)
                                }}
                            >
                                {size}
                                <div className={clsx(
                                    "absolute bottom-1 right-1",
                                    {
                                        "visible": selectedSize === size,
                                        "hidden": selectedSize !== size,
                                    }
                                )}>
                                    <Checkmark className="stroke-text w-5 h-auto" />
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
} 