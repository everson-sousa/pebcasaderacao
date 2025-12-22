import { createClient } from '@supabase/supabase-js'

// O uso do "!" (Non-null assertion) ou "as string" é fundamental aqui
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Se o build ainda reclamar, use o fallback de string vazia:
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

