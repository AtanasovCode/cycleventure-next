export function CardSkeleton() {
    return (
        <div className="w-full flex flex-col items-start justify-center gap-2">
            <div className="w-full aspect-[3/2] bg-secondary" />
            <div className="w-36 h-6 bg-secondary" />
            <div className="w-20 h-6 bg-secondary" />
        </div>
    );
}

export function ProductsDisplaySkeleton() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
}