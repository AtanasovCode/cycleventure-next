export type CartType = {
    id: string | null;
    user_id: string | null;
    email: string | null;
    product_id: string;
    name: string;
    photo: string;
    price: number;
    quantity: number;
}