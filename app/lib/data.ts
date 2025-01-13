import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function fetchProducts() {
    try {
        // Fetch all items from the "products" table
        const { data, error } = await supabase.from('products').select('*');

        if (error) {
            console.error('Error fetching products:', error.message);
            return [];
        }
        return data;
    } catch (err) {
        console.error('Unexpected error:', err);
        return [];
    }
}
