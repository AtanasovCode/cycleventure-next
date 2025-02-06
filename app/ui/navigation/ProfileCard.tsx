import clsx from "clsx";
import Triangle from "@/app/assets/icons/triangle.svg";


type ProfileProps = {
    email: string | undefined;
    show: boolean;
    setShow: (value: boolean) => void;
}

export default function ProfileCard({
    email,
    show,
    setShow,
}: ProfileProps) {

    return (
        <div className={clsx(
            "flex flex-col items-center justify-start rounded-md min-w-32 max-w-32 absolute top-[160%] left-1/2 -translate-x-1/2 transition-all ease-in-out text-text bg-secondary border-2 border-slate-600 z-50",
            {
                "max-h-0 pointer-events-none border-none overflow-hidden": !show,
                "max-h-64 min-w-0 pointer-events-auto": show
            }
        )}>
            <Triangle className="w-[44px] h-auto absolute -top-6 left-1/2 -translate-x-1/2 z-30" />
            <div className="w-full flex flex-col items-center justify-center gap-4 bg-secondary p-4 rounded-md z-50">
                <div className="w-10 aspect-square rounded-full bg-accent flex items-center justify-center font-bold text-black uppercase">
                    {email?.slice(0, 2)}
                </div>
                <div className="text-xs">
                    {email?.split('@')[0]}
                </div>
                <div className="w-full flex items-center justify-center">
                    <input 
                        type="button"
                        value="Sign Out"
                        className="w-full text-center bg-accent text-black text-xs p-2 rounded-xl cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}