import Plus from "@/app/assets/icons/plus.svg";
import Minus from "@/app/assets/icons/minus.svg";

type QuantityProps = {
    quantity: number;
    setQuantity: (value: number) => void;
}

export default function QuantitySelect({
    quantity,
    setQuantity,
}: QuantityProps) {
    return (
        <div className="w-full flex items-center justify-start">
            <div className="border-2 border-slate-500 rounded-lg flex items-center justify-between gap-6 p-2">

            </div>
        </div>
    );
}