import Link from "next/link";
import { User } from "@supabase/supabase-js";

type AuthMessageProps = {
    user: User | null;
}

export default function CartAuthMessage({
    user,
}: AuthMessageProps) {
    return (
        <div className="w-full">
            {
                !user && (
                    <div className="w-full flex flex-col items-start justify-center gap-4">
                        <div className="w-full text-left text-text opacity-90">
                            <Link href="/sign-in" className="text-text underline">Sign In</Link>
                            <span> to save your cart and proceed to checkout</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
}