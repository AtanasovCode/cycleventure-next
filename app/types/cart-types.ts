type ProductTypes = {
    name: string;
    final_price: number;
    photos: string[];
}

export type UserCartItemProps = {
    id: string;
    user_id: string;
    product_id: string;
    size: string;
    quantity: string;
    products: ProductTypes;
    totalItemPrice: number;
}

export type CartItemProps = {
    id: string;
    user_id: string;
    product_id: string;
    size: string;
    quantity: number;
    final_price: number;
    totalItemPrice: number;
};
