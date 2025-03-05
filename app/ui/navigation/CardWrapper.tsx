type WrapperProps = {
    children: React.ReactNode;
};

export default function CardWrapper({ children }: WrapperProps) {
    return (
        <div
            className="
                flex flex-col items-center justify-start rounded-md text-text bg-secondary z-50
                max-h-64 min-w-32 max-w-32 transition-all ease-in-out overflow-hidden
                absolute top-[130%] left-1/2 -translate-x-1/2
            "
        >
            <div className="w-full flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
}
