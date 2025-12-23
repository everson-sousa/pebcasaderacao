import { createClient } from '@supabase/supabase-js'

// Definimos as variáveis pegando do ambiente (.env.local ou Vercel)
// O "|| ''" garante que o código não quebre durante o build caso a variável demore a carregar
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Exportamos o cliente configurado para ser usado em todo o projeto
export const supabase = createClient(supabaseUrl, supabaseAnonKey)