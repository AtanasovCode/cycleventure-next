import { createClient } from '@/utils/supabase/server';

export async function fetchAllProducts() {
    const supabase = await createClient();
    const { data: products } = await supabase.from("products").select();

    return (JSON.stringify(products, null, 2));
}