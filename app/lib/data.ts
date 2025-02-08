import { createClient } from '@supabase/supabase-js';
import { Product } from "@/app/types/Product";
import { SortOptions } from "@/app/types/sort";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

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
): Promise<{ totalPages: number; data: Product[] }> {

    const start = Math.max(0, (page - 1) * itemsPerPage);
    const end = Math.max(start + itemsPerPage - 1, 0);

    try {
        let query = supabase
            .from('products')
            .select('id, name, brand, category, price, frameType, numberOfReviews, photos', { count: 'exact' })
            .range(start, end);

        // sort the products based on the sorting filter selected
        switch (sort) {
            case "position":
                break;
            case "top-rated":
                query = query.order("numberOfReviews", { ascending: false });
                break;
            case "price-low-to-high":
                query = query.order("price", { ascending: true });
                break;
            case "price-high-to-low":
                query = query.order("price", { ascending: false });
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

        return { totalPages, data: data as Product[] };
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

        const {data, error} = await query;

        if(error || !data) {
            console.error("Something went wrong", error);
            return null;
        }

        return data;
     } catch (error: any) {
        console.error(error.message);
     }
}