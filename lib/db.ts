import { createClient } from '@/lib/supabase/client'
import { QueryData } from '@supabase/supabase-js'
import { SubmissionInputs } from './definitions'


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

export async function blockAssociationSubmission(formData : SubmissionInputs) {
  const supabase = await createClient()
  const response = await supabase.from('submissions').insert({
    name: formData.name,
    email: formData.email,
    block_association_name: formData.block_association_name,
    block_association_email: formData.block_association_email,
    block_association_website: formData.block_association_website,
    block_association_phone: formData.block_association_phone,
    block_association_boundaries: formData.block_association_boundaries,
    other_info: formData.other_info
  }
  )
  console.log(response)
}
