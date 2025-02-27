type ProductTypes = {
    name: string;
    final_price: number;
    photos: string[];
}

export type CartType = {
    //id: string;
    user_id: string;
    product_id: string;
    size: string;
    quantity: number;
    products: ProductTypes[];
};
