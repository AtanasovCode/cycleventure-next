import Link from "next/link";
import clsx from "clsx";
import SignUpIcon from "@/app/assets/icons/sign-up.svg";
import SignInIcon from "@/app/assets/icons/sign-in.svg";
import Triangle from "@/app/assets/icons/triangle.svg";

type AuthProps = {
    show: boolean;
    setShow: (value: boolean) => void;
}

export default function AuthCard({
    show,
    setShow,
}: AuthProps) {
    return (
        <div className={clsx(
            "flex flex-col items-center justify-start rounded-md min-w-32 absolute top-[160%] left-1/2 -translate-x-1/2 transition-all ease-in-out text-text bg-secondary border-2 border-slate-600 z-50",
            {
                "max-h-0 pointer-events-none border-none overflow-hidden": !show,
                "max-h-64 min-w-0 pointer-events-auto": show
            }
        )}>
            <Triangle className="w-[44px] h-auto absolute -top-6 left-1/2 -translate-x-1/2 z-30" />
            <div className="w-full flex flex-col items-center justify-center z-50 bg-secondary">
                <Link 
                    className="w-full flex items-center justify-center gap-3 p-3 cursor-pointer hover:bg-slate-600"
                    href="/sign-in"
                >
                    <SignInIcon className="h-5 w-auto" />
                    <div>
                        Sign in
                    </div>
                </Link>
                <Link 
                    className="w-full flex items-center justify-center gap-3 p-3 cursor-pointer hover:bg-slate-600"
                    href="/sign-up"
                >
                    <SignUpIcon className="h-5 w-auto" />
                    <div>
                        Sign up
                    </div>
                </Link>
            </div>
        </div>
    );
} 