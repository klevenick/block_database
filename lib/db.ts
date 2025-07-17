import { createClient } from '@/lib/supabase/client'
import { QueryData } from '@supabase/supabase-js'


export interface blockObject {
  id: number,
  created_at: string,
  name: string,
  boundaries: string,
  coords: Array<string>,
  email: string,
  phone: string,
  website: string,
  is_active: boolean
}

export async function getBlockAssociations() {
  const supabase = await createClient()
  const block_association_query = supabase.from('block_associations').select()
  type BlockAssociations = QueryData<typeof block_association_query>

  const { data, error } = await block_association_query
  if (error) throw error
  const block_associations: BlockAssociations = data
  
  return block_associations
} 
