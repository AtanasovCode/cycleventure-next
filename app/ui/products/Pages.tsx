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
        <div className="w-full flex items-center justify-start gap-3">
            <div
                className="flex items-center justify-center rounded-md border border-accent cursor-pointer p-2"
                onClick={() => pageBack()}
            >
                <ArrowLeft className="w-5 h-auto stroke-text" />
            </div>
            {Array.from({ length: totalPages }, (_, i) => (
                <div
                    key={i} // Always use a key when rendering lists in React
                    className={clsx(
                        "text-base lg:text-xs cursor-pointer aspect-square flex items-center justify-center text-text rounded-md border py-2 px-4",
                        {
                            "border-accent": page === i + 1,
                            "border-none": page !== i + 1,
                        }
                    )}
                    onClick={() => setPage(i + 1)} // Adjust index for page number
                >
                    {i + 1} {/* Display the correct page number */}
                </div>
            ))}
            <div
                className="flex items-center justify-center rounded-md border border-accent cursor-pointer p-2"
                onClick={() => pageForward()}
            >
                <ArrowRight className="w-5 h-auto stroke-text" />
            </div>
        </div>
    );
}