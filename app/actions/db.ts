import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)

export async function getBAs() {

    const { data, error } = await supabase
        .from('block_associations')
        .select()

    return data
} 
