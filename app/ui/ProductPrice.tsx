import clsx from "clsx";
import { formatMoney } from "@/app/lib/utils";
import { useProductStore } from "@/useProductStore";

export default function ProductPrice() {

    const { product } = useProductStore();

    return (
        <div className="flex items-center justify-start gap-2">
            <div className="text-inherit">
                {
                    formatMoney.format(product ? product.final_price : 0)
                }
            </div>
            <div className={clsx(
                "text-slate-400 text-xs",
                {
                    "hidden": !product?.isOnSale,
                    "inline-block": product?.isOnSale
                }
            )}>
                ●
            </div>
            <div className={clsx(
                "line-through text-slate-400 text-base",
                {
                    "hidden": !product?.isOnSale,
                    "inline-block": product?.isOnSale
                }
            )}>
                {
                    formatMoney.format(product ? product.price : 0)
                }
            </div>
        </div>
    );
}