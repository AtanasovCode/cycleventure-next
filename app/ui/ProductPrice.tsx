import clsx from "clsx";
import { formatMoney } from "@/app/lib/utils";

type PriceProps = {
    price: number;
    isOnSale: boolean;
    finalPrice: number;
}

export default function ProductPrice({
    price,
    finalPrice,
    isOnSale,
}: PriceProps) {
    return (
        <div className="flex items-center justify-start gap-2">
            <div className="text-inherit">
                {
                    formatMoney.format(finalPrice)
                }
            </div>
            <div className={clsx(
                "text-slate-400 text-xs",
                {
                    "hidden": !isOnSale,
                    "inline-block": isOnSale
                }
            )}>
                ●
            </div>
            <div className={clsx(
                "line-through text-slate-400 text-base",
                {
                    "hidden": !isOnSale,
                    "inline-block": isOnSale
                }
            )}>
                {
                    formatMoney.format(price)
                }
            </div>
        </div>
    );
}