import { CartType } from "@/app/types/cart-types";
import Image from "next/image";

type ItemProps = {
    cart: CartType | null;
}

export default function CartItems({
    cart,
}: ItemProps) {
    return (
        <div>
            {
                cart ? (
                    <div
                        className="flex items-center justify-center gap-2"
                    >
                        <div>
                            <Image
                                src={cart.photo}
                                width={800}
                                height={600}
                                alt="cart item photo"
                                className="max-w-16"
                            />
                        </div>
                        <div>
                            {cart.name}
                        </div>
                        <div>
                            {cart.price}
                        </div>
                    </div>
                ) : (
                    <div>
                        Cart is empty
                    </div>
                )
            }
        </div>
    );
}