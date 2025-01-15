export function CardSkeleton() {
    return (
        <div className="w-full flex flex-col items-start justify-center gap-6">
            <div className="w-full aspect-[3/2] bg-secondary" />
            <div className="w-48 h-8 bg-secondary" />
            <div className="w-28 h-8 bg-secondary" />
        </div>
    );
}

export function ProductsDisplaySkeleton() {
    return (
        <div className="w-full grid grid-cols-3 gap-6">
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