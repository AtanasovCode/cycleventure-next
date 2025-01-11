import { db } from "@vercel/postgres";
import { createClient } from "@supabase/supabase-js";

export async function fetchProducts() {
    const supabase = await createClient();
    const { data: products } = await supabase.from("products").select();

    return products;
}
