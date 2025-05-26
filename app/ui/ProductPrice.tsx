import clsx from "clsx";
import { formatMoney } from "@/app/lib/utils";
import { ProductTypes } from "../types/product-types";

type PriceProps = {
    product: ProductTypes;
}

export default function ProductPrice({
    product,
}: PriceProps) {
    return (
        <div className="flex items-center justify-start gap-2">
            <div className="text-inherit">
                {
                    formatMoney.format(product.final_price)
                }
            </div>
            <div className={clsx(
                "text-slate-400 text-xs",
                {
                    "hidden": !product.isOnSale,
                    "inline-block": product.isOnSale
                }
            )}>
                ●
            </div>
            <div className={clsx(
                "line-through text-slate-400 text-base",
                {
                    "hidden": !product.isOnSale,
                    "inline-block": product.isOnSale
                }
            )}>
                {
                    formatMoney.format(product.price)
                }
            </div>
        </div>
    );
}