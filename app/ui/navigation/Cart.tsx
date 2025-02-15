import clsx from "clsx";
import Triangle from "@/app/assets/icons/triangle.svg";

type CartProps = {
    show: boolean;
}

export default function Cart({
    show,
}: CartProps) {
    return (
        <div className={clsx(
            "flex flex-col items-center justify-start absolute top-[160%] right-0 rounded-md transition-all ease-in-out text-text bg-secondary border-2 border-slate-600 z-50",
            {
                "max-h-0 pointer-events-none border-none overflow-hidden": !show,
                "max-h-64 min-w-0 pointer-events-auto": show
            }
        )}>
            <Triangle className="w-[34px] h-auto absolute -top-6 right-0 z-30" />
            <div className="flex flex-col items-center justify-start z-50 bg-secondary min-w-[85vw] lg:min-w-[30vw] min-h-[70dvh] rounded-md"></div>
        </div>
    );
}