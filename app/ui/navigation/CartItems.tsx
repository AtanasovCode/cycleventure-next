import { CartItemProps } from "@/app/types/cart-types";
import Image from "next/image";
import { formatMoney } from "@/app/lib/utils";
import TrashIcon from "@/app/assets/icons/trash.svg";

type ItemProps = {
    cart: CartItemProps[] | null;
    local: boolean;
}

export default function CartItems({
    cart,
    local,
}: ItemProps) {

    console.log("CART ITEMS: ", cart);

    return (
        <div className="w-full flex flex-col items-start justify-start gap-3">
            {
                cart ? (
                    cart.map((item: any) => {
                        return (
                            <div
                                key={item.id}
                                className="w-full flex items-start justify-start"
                            >
                                <div className="w-full flex flex-col items-start justify-start gap-2">
                                    <div className="font-bold">
                                        {local ? item.name : item.products.name}
                                    </div>
                                    <div className="flex items-center ju0stify-start gap-3">
                                        <div>
                                            <Image
                                                src={local ? item.photo : item.products.photos[0]}
                                                width={800}
                                                height={600}
                                                alt="cart item photo"
                                                className="max-w-40 p-1 bg-gray-200 rounded-xl flex items-center justify-center"
                                            />
                                        </div>
                                        <div className="flex flex-col items-start justify-center gap-1">
                                            <div className="text-sm capitalize">
                                                <span className="font-bold">Brand:</span> {local ? item.brand : item.products.brand}
                                            </div>
                                            <div className="text-sm">
                                                <span className="font-bold">Quantity:</span> {item.quantity}
                                            </div>
                                            <div className="text-sm">
                                                <span className="font-bold">Size:</span> {item.size}
                                            </div>
                                            <div>
                                                {formatMoney.format(local ? item.final_price : item.totalItemPrice)}
                                            </div>
                                        </div>
                                    </div>
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