import { signOutAction } from "@/app/actions";
import { User } from "@supabase/supabase-js";
import clsx from "clsx";
import Triangle from "@/app/assets/icons/triangle.svg";


type ProfileProps = {
    email: string | undefined;
    setUser: (value: User | null) => void;
}

export default function ProfileCard({
    email,
    setUser,
}: ProfileProps) {

    return (
        <div className="w-full gap-4 p-3 flex flex-col items-center justify-start">
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
                    onClick={() => {
                        signOutAction();
                        setUser(null);
                    }}
                    className="w-full text-center bg-accent text-black text-xs p-2 rounded-xl cursor-pointer"
                />
            </div>
        </div>
    );
}