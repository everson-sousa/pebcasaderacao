// import { createClient } from '@supabase/supabase-js'

// // TRUQUE PARA O BUILD NÃO FALHAR:
// // Se a variável de ambiente não for encontrada durante o build,
// // usamos uma URL e uma chave fictícias ('placeholder') para o código não quebrar.
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)
import { createClient } from '@supabase/supabase-js'

// COLE SUA URL REAL AQUI DENTRO DAS ASPAS (Copie do .env.local)
const supabaseUrl = 'https://ifaeztfvivonmqukelba.supabase.co' 

// COLE SUA CHAVE REAL AQUI DENTRO DAS ASPAS
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmYWV6dGZ2aXZvbm1xdWtlbGJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMTEwOTcsImV4cCI6MjA3OTU4NzA5N30.jVJiy1Hp4vGKa-eyUubvP_pJ46vKcQ4HdfCdRMZFprQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)