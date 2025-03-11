import { CartItemProps, UserCartItemProps } from "@/app/types/cart-types";
import Image from "next/image";
import { formatMoney } from "@/app/lib/utils";
import { fetchUserCart } from "@/app/lib/data";
import TrashIcon from "@/app/assets/icons/trash.svg";
import { deleteItemFromCart } from "@/app/lib/data";
import { useCartStore } from "@/useCartStore";

type ItemProps = {
    userID: string | undefined;
    cart: CartItemProps[] | UserCartItemProps[] | null;
    local: boolean;
}

export default function CartItems({
    userID,
    cart,
    local,
}: ItemProps) {

    const { setUserCart, setTotalCartPrice } = useCartStore();

    const refreshCart = async () => {
        if (userID) {
            const cartData = await fetchUserCart(userID);
            if (cartData) {
                setUserCart(cartData.cartItems);
                setTotalCartPrice(cartData.totalCartPrice ?? 0);
            } else {
                setUserCart(null);
                setTotalCartPrice(0);
            }
        }
    };

    const handleItemDelete = async (product_id: string) => {
        await deleteItemFromCart(product_id, userID).then(() => {
            refreshCart();
        })
    };


    return (
        <div className="w-full flex flex-col items-start justify-start gap-4">
            {
                cart?.map((item: any) => {
                    return (
                        <div
                            key={item.id}
                            className="w-full flex flex-col items-start justify-start gap-2"
                        >
                            <div className="font-bold text-base">
                                {local ? item.name : item.products.name}
                            </div>
                            <div className="w-full flex items-center justify-start gap-2">
                                <div>
                                    <Image
                                        src={local ? item.photo : item.products.photos[0]}
                                        width={800}
                                        height={600}
                                        alt="cart item photo"
                                        className="max-w-32 p-1 bg-gray-200 rounded-xl flex items-center justify-center"
                                    />
                                </div>
                                <div className="w-full flex items-center justify-between gap-2">
                                    <div className="flex flex-col items-start justify-center gap-1">
                                        <div className="text-sm">
                                            <span className="">Quantity:</span> {item.quantity}
                                        </div>
                                        <div className="text-sm">
                                            <span className="">Size:</span> {item.size}
                                        </div>
                                        <div className="text-md">
                                            {formatMoney.format(local ? item.final_price : item.totalItemPrice)}
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => handleItemDelete(item.product_id)}
                                    >
                                        <TrashIcon className="w-4 h-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}