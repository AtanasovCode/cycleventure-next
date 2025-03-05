import ArrowLeft from "@/app/assets/icons/arrow-left-fancy.svg";
import ArrowRight from "@/app/assets/icons/arrow-right-fancy.svg";

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

export function ProductPreviewSkeleton() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-start w-full min-h-screen bg-background lg:justify-between lg:items-start py-8 md:py-10 lg:py-12 px-6 sm:px-12 lg:px-0 lg:max-w-[90vw] gap-8">
            <div className="w-full flex flex-col items-start justify-center gap-2">
                <div className="w-full flex items-center justify-center relative">
                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-secondary flex items-center justify-center p-1 rounded-full cursor-pointer border-[.4rem] border-background">
                        <ArrowLeft className="w-5 md:w-8 h-auto" />
                    </div>
                    <div className="w-full h-[35dvh] sm:h-[70dvh] md:h-[80dvh] bg-secondary" />
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-secondary flex items-center justify-center p-1 rounded-full cursor-pointer border-[.4rem] border-background">
                        <ArrowRight className="w-5 md:w-8 h-auto" />
                    </div>
                </div>
                <div className="flex items-center justify-start gap-1">
                    <div className="min-w-16 md:min-w-20 lg:min-w-24 aspect-square bg-secondary " />
                    <div className="min-w-16 md:min-w-20 lg:min-w-24  aspect-square bg-secondary " />
                    <div className="min-w-16 md:min-w-20 lg:min-w-24  aspect-square bg-secondary " />
                    <div className="min-w-16 md:min-w-20 lg:min-w-24  aspect-square bg-secondary " />
                </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-4 lg:max-w-[35%]">
                <div className="w-2/4 h-12 bg-secondary" />
                <div className="w-full flex flex-col items-start justify-start gap-2">
                    <div className="w-1/3 h-4 bg-secondary" />
                    <div className="w-1/3 h-4 bg-secondary" />
                    <div className="w-1/3 h-4 bg-secondary" />
                </div>
                <div className="w-1/3 h-12 my-4 bg-secondary" />
                <div className="w-full h-[25dvh] bg-secondary" />
                <div className="w-16 h-8 bg-secondary" />
                <div className="w-full grid grid-cols-2 gap-2">
                    <div className="w-full h-12 bg-secondary" />
                    <div className="w-full h-12 bg-secondary" />
                    <div className="w-full h-12 bg-secondary" />
                    <div className="w-full h-12 bg-secondary" />
                    <div className="w-full h-12 bg-secondary" />
                    <div className="w-full h-12 bg-secondary" />
                </div>
                <div className="w-16 h-8 bg-secondary" />
                <div className="w-24 h-12 bg-secondary" />
                <div className="w-full h-12 bg-secondary" />
            </div>
        </div>
    );
}