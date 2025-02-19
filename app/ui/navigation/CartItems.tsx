import { CartType } from "@/app/types/cart-types";
import Image from "next/image";
import { formatMoney } from "@/app/lib/utils";

type ItemProps = {
    cart: CartType[] | null;
}

export default function CartItems({
    cart,
}: ItemProps) {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-6">
            {
                cart ? (
                    cart.map((item: any) => {
                        return (
                            <div
                                key={item.id}
                                className="w-full flex items-center justify-between gap-4"
                            >
                                <div className="w-full flex items-center justify-start gap-4">
                                    <div>
                                        <Image
                                            src={item.photo}
                                            width={800}
                                            height={600}
                                            alt="cart item photo"
                                            className="max-w-28 p-1 bg-slate-300 rounded-xl flex items-center justify-center"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-center gap-1">
                                        <div className="font-bold">
                                            {item.name}
                                        </div>
                                        <div className="text-sm">
                                            Quantity: {item.quantity}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {formatMoney.format(item.price)}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div>
                        Cart is empty
                    </div>
                )
            }
        </div>
    );
}