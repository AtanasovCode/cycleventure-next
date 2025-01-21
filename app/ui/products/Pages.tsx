import clsx from "clsx";
import ArrowLeft from "@/app/assets/icons/arrow-left.svg";
import ArrowRight from "@/app/assets/icons/arrow-right.svg";

type PageTypes = {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
    pageForward: () => void;
    pageBack: () => void;
}

export default function Pages({ page, setPage, totalPages, pageForward, pageBack }: PageTypes) {
    return (
        <div className="w-full flex items-center justify-center lg:justify-start gap-3">
            <div
                className="flex items-center justify-center w-12 h-12 lg:w-8 lg:h-8 rounded-full border border-slate-600 cursor-pointer"
                onClick={() => pageBack()}
            >
                <ArrowLeft className="w-4 h-4" />
            </div>
            {Array.from({ length: totalPages }, (_, i) => (
                <div
                    key={i} // Always use a key when rendering lists in React
                    className={clsx(
                        "text-base lg:text-xs cursor-pointer w-12 lg:w-8 aspect-square flex items-center justify-center border rounded-full",
                        {
                            "bg-primary text-background border-none": page === i + 1,
                            "border-slate-600": page !== i + 1,
                        }
                    )}
                    onClick={() => setPage(i + 1)} // Adjust index for page number
                >
                    {i + 1} {/* Display the correct page number */}
                </div>
            ))}
            <div
                className="flex items-center justify-center w-12 h-12 lg:w-8 lg:h-8 rounded-full border border-slate-600 cursor-pointer"
                onClick={() => pageForward()}
            >
                <ArrowRight className="w-4 h-4" />
            </div>
        </div>
    );
}