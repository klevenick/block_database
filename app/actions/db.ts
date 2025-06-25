import { createClient } from '@supabase/supabase-js'


export async function getBAs() {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    const { data, error } = await supabase
        .from('block_associations')
        .select()

    return data
} 
