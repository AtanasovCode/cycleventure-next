import { createClient } from '@supabase/supabase-js';

import { Product } from "@/app/types/Product";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function fetchProducts(
    page: number,
    itemsPerPage: number,
    filter: string
): Promise<{ totalPages: number; data: Product[] }> {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage - 1;

    try {
        let query = supabase
            .from('products')
            .select('*', { count: 'exact' })
            .range(start, end);

        if (filter !== '') {
            query = query.eq('category', filter);
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
