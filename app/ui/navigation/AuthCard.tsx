import Link from "next/link";
import SignUpIcon from "@/app/assets/icons/sign-up.svg";
import SignInIcon from "@/app/assets/icons/sign-in.svg";

export default function AuthCard() {

    const authData = [
        {
            id: "SignInKey",
            href: "/sign-in",
            icon: <SignInIcon className="h-5 w-auto" />,
            name: "Sign In"
        },
        {
            id: "SignUpKey",
            href: "/sign-up",
            icon: <SignUpIcon className="h-5 w-auto" />,
            name: "Sign Up"
        }
    ]

    return (
        <>
            {
                authData.map((item) => {
                    return (
                        <Link
                            key={item.id}
                            className="w-full flex items-center justify-start gap-3 p-3 cursor-pointer hover:bg-slate-600"
                            href={item.href}
                        >
                            {item.icon}
                            <div>
                                {item.name}
                            </div>
                        </Link>
                    );
                })
            }
        </>
    );
} 