/*
    ==== TO DO ====

    Move the dropdown part of both Auth and Profile card into one DropdownCart component and have the same styling for both.

    Move Auth and Profile card's and display them based on user sign in status.

    Save on needing to write double styles for the 2 very similarly styled components
*/

import Link from "next/link";
import clsx from "clsx";
import SignUpIcon from "@/app/assets/icons/sign-up.svg";
import SignInIcon from "@/app/assets/icons/sign-in.svg";
import Triangle from "@/app/assets/icons/triangle.svg";

type AuthProps = {
    show: boolean;
}

export default function AuthCard({
    show,
}: AuthProps) {
    return (
        <div className={clsx(
            "flex flex-col items-center justify-start rounded-md min-w-32 absolute top-[160%] left-1/2 -translate-x-1/2 transition-all ease-in-out text-text bg-secondary border-2 border-slate-500 z-50",
            {
                "max-h-0 pointer-events-none border-none overflow-hidden": !show,
                "max-h-64 min-w-0 pointer-events-auto": show
            }
        )}>
            <Triangle className="w-[44px] h-auto absolute -top-6 left-1/2 -translate-x-1/2 z-30" />
            <div className="w-full flex flex-col items-center justify-center z-50 bg-secondary rounded-md">
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