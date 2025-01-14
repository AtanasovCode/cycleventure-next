import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function fetchProducts(page: number, itemsPerPage: number) {

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage - 1;

    try {
        // Fetch all items from the "products" table
        const { data, error, count } = await supabase.from('products')
            .select('*', { count: 'exact' })
            .range(start, end);

        if (error) {
            console.error('Error fetching products:', error.message);
            return [];
        }

        const totalPages = count ? Math.ceil(count / itemsPerPage) : 0;

        return {totalPages, data};
    } catch (err) {
        console.error('Unexpected error:', err);
        return [];
    }
}
