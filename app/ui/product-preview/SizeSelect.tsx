import clsx from "clsx";

type SizeProps = {
    sizes: string[];
    selectedSize: string;
    setSelectedSize: (value: string) => void;
}

export default function SizeSelect({
    sizes,
    selectedSize,
    setSelectedSize,
}: SizeProps) {
    return (
        <div className="w-full flex flex-col items-start justify-center gap-4 mt-4">
            <div className="font-bold">
                Size
            </div>
            <div className="grid grid-cols-2 w-full gap-4">
                {
                    sizes.map((size) => {
                        return (
                            <div 
                                className={clsx(
                                    "w-full flex items-center justify-center border p-2 rounded-md cursor-pointer",
                                    {
                                        "border-slate-500": selectedSize !== size,
                                        "border-accent border-2": selectedSize === size
                                    }
                                )}
                                onClick={() => setSelectedSize(size)}
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