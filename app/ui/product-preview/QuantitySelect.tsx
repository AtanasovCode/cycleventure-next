import Plus from "@/app/assets/icons/plus.svg";
import Minus from "@/app/assets/icons/minus.svg";

type QuantityProps = {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuantitySelect({
    quantity,
    setQuantity,
}: QuantityProps) {

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity < 99 ? prevQuantity + 1 : prevQuantity)
    }

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity === 1 ? prevQuantity : prevQuantity - 1);
    }

    return (
        <div className="w-full flex flex-col items-start justify-center gap-3">
            <div className="font-bold">
                Quantity
            </div>
            <div className="border-2 border-slate-500 rounded-lg flex items-center justify-between gap-6 p-2">
                <button onClick={() => decreaseQuantity()}>
                    <Minus className="w-4 h-auto" />
                </button>
                <div>
                    {quantity}
                </div>
                <button onClick={() => increaseQuantity()}>
                    <Plus className="w-4 h-auto" />
                </button>
            </div>
        </div>
    );
}