import clsx from "clsx";

type PageTypes = {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
}

export default function Pages({ page, setPage, totalPages }: PageTypes) {
    return (
        <div className="w-full flex items-center justify-start gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
                <div
                    key={i} // Always use a key when rendering lists in React
                    className={clsx(
                        "text-xs cursor-pointer w-8 aspect-square flex items-center justify-center border rounded-full",
                        {
                            "bg-primary text-background border-none": page === i,
                            "border-slate-600": page !== i,
                        }
                    )}
                    onClick={() => setPage(i + 1)} // Adjust index for page number
                >
                    {i + 1} {/* Display the correct page number */}
                </div>
            ))}
        </div>
    );
}