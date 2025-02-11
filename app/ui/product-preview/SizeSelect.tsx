type SizeProps = {
    sizes: string[];
}

export default function SizeSelect({
    sizes,
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
                                className="w-full flex items-center justify-center border border-slate-500 p-2 rounded-md cursor-pointer"
                                onClick={() => ""}
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