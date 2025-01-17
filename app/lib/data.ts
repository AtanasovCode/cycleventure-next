import { createClient } from '@supabase/supabase-js';
import { Product } from "@/app/types/Product";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

type Filters = {
    category?: string[];
    frameType?: string[];
    brand?: string[];
};

export default async function fetchProducts(
    page: number,
    itemsPerPage: number,
    filters: Filters
): Promise<{ totalPages: number; data: Product[] }> {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage - 1;

    try {
        let query = supabase
            .from('products')
            .select('*', { count: 'exact' })
            .range(start, end);

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
            return { totalPages: 0, data: [] };
        }

        const totalPages = count ? Math.ceil(count / itemsPerPage) : 0;

        return { totalPages, data: data as Product[] };
    } catch {
        return { totalPages: 0, data: [] };
    }
}
