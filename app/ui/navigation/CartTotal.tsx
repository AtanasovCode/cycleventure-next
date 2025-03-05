import clsx from "clsx";
import { CartItemProps } from "@/app/types/cart-types";
import { formatMoney } from "@/app/lib/utils";

type TotalProps = {
    cart: CartItemProps[] | null;
    totalCartPrice: number;
}

export default function CartTotal({
    cart,
    totalCartPrice,
}: TotalProps) {
    return (
        <div className={clsx(
            "w-full flex flex-col items-start justify-start gap-2",
            {
                "hidden": !cart,
                "inline-block": cart
            },
        )}>
            <div className="w-full text-sm flex items-center justify-between">
                <div>
                    Subtotal
                </div>
                <div>
                    {formatMoney.format(totalCartPrice)}
                </div>
            </div>
            <div className="w-full text-lg lg:text-xl flex items-center justify-between">
                <div>
                    Total
                </div>
                <div>
                    {formatMoney.format(totalCartPrice)}
                </div>
            </div>
        </div>
    );
}