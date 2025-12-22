import { createClient } from '@supabase/supabase-js'

// O uso de "|| ''" garante que o código receba uma string, 
// evitando o erro "is required" durante a compilação.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

