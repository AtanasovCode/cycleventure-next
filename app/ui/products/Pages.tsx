type PageTypes = {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
}

export default function Pages({ page, setPage, totalPages }: PageTypes) {
    return (
        <div className="flex items-center justify-start gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
                <div
                    key={i} // Always use a key when rendering lists in React
                    className="text-xs cursor-pointer w-8 aspect-square flex items-center justify-center border border-slate-500 rounded-full"
                    onClick={() => setPage(i + 1)} // Adjust index for page number
                >
                    {i + 1} {/* Display the correct page number */}
                </div>
            ))}
        </div>
    );
}