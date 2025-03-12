// import { createClient } from '@supabase/supabase-js';
import { createClient } from "@/utils/supabase/client";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

import { ProductTypes } from "@/app/types/product-types";
import { CartItemProps } from "@/app/types/cart-types";

const supabase = createClient();

type Filters = {
    category?: string[];
    frameType?: string[];
    brand?: string[];
};

// Fetches products to display as preview cards in the products page
export default async function fetchProducts(
    page: number,
    itemsPerPage: number,
    filters: Filters,
    sort: string,
): Promise<{ totalPages: number; data: ProductTypes[] }> {

    const start = Math.max(0, (page - 1) * itemsPerPage);
    const end = Math.max(start + itemsPerPage - 1, 0);

    try {
        let query = supabase
            .from('products')
            .select('id, name, brand, category, price, isOnSale, salePercent, final_price, frameType, numberOfReviews, photos', { count: 'exact' })
            .range(start, end);

        // sort the products based on the sorting filter selected
        switch (sort) {
            case "position":
                break;
            case "top-rated":
                query = query.order("numberOfReviews", { ascending: false });
                break;
            case "price-low-to-high":
                query = query.order("final_price", { ascending: true });
                break;
            case "price-high-to-low":
                query = query.order("final_price", { ascending: false });
                break;
            case "a-z":
                query = query.order("name", { ascending: true });
                break;
            case "z-a":
                query = query.order("name", { ascending: false });
                break;
            default:
                break;
        }

        // Apply filters dynamically
        if (filters.category?.length) {
            query = query.in('category', filters.category);
        }
        if (filters.frameType?.length) {
            query = query.in('frameType', filters.frameType);
        }
        if (filters.brand?.length) {
            query = query.in('brand', filters.brand);
        }

        const { data, error, count } = await query;

        if (error || !data) {
            console.error("Something went wrong", error);
            return { totalPages: 0, data: [] };
        }

        if (!data || count === 0) {
            return { totalPages: 0, data: [] };
        }

        const totalPages = count ? Math.ceil(count / itemsPerPage) : 0;

        return { totalPages, data: data as ProductTypes[] };
    } catch {
        return { totalPages: 0, data: [] };
    }
}


export async function fetchSelectedProduct(productID: string) {
    try {
        let query = supabase
            .from('products')
            .select('*')
            .eq("id", productID)
            .single()

        const { data, error } = await query;

        if (error || !data) {
            console.error("Something went wrong", error);
            return null;
        }

        return data;
    } catch (error: any) {
        console.error(error.message);
    }
}

export async function fetchUserData() {
    const { data: { user } } = await supabase.auth.getUser();

    return user;
}


export async function addToCart(
    user_id: string,
    product_id: string,
    quantity: number,
    size: string,
) {

    console.log("USER ID: ", user_id);

    try {
        const { data, error } = await supabase
            .from("cart")
            .insert([
                {
                    user_id: user_id,
                    product_id: product_id,
                    quantity: quantity,
                    size: size
                }
            ]);

        if (error) {
            console.error("Failed to add item to cart:", error);
            return null;
        }

    } catch (error: any) {
        console.error("Something went wrong", error.message);
        return;
    }
}

export async function fetchUserCart(user_id: string) {
    try {
        const { data, error } = await supabase
            .from("cart")
            .select("id, user_id, product_id, size, quantity, products (name, final_price, photos)")
            .eq("user_id", user_id)

        if (error) {
            console.error("Something went wrong", error);
            return null;
        }

        const cartItemProducts = data.map((item) => ({
            ...item,
            products: Array.isArray(item.products) ? item.products[0] : item.products, // Ensure it's an object
        }));

        const cartItems = cartItemProducts.map((item) => ({
            ...item,
            totalItemPrice: item.products?.final_price ? item.quantity * item.products.final_price : 0
        }))



        const totalCartPrice = cartItems.reduce((acc, item) => acc + item.totalItemPrice, 0);

        return { cartItems, totalCartPrice }

    } catch (error: any) {
        console.error("Something went wrong", error.message);
        return null;
    }
}

export async function deleteItemFromCart(product_id: string, user_id: string | undefined) {

    if (user_id === undefined) {
        console.log("Couldn't find any authenticated users");
        return;
    } else {
        console.log("Deleting product:", product_id);
        console.log("For user:", user_id);

    }

    try {
        const { error } = await supabase
            .from("cart")
            .delete()
            .eq("product_id", product_id)

        if (error) {
            console.error("Something went wrong deleting cart item ", error.message);
            return;
        }
    } catch (error: any) {
        console.error("Something went wrong deleting cart item ", error.message);
        return;
    }
}