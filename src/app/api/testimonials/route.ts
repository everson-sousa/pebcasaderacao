// app/api/testimonials/route.ts

import { NextResponse } from 'next/server';
// Caminho de importação que funcionou para a sua estrutura de pastas
import { supabase } from "../../../lib/supabase"; 

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // O formulário está enviando 'name' e 'content'
    const { name, content } = data; 
    
    // 1. Verificação de segurança básica
    if (!name || !content) {
      return NextResponse.json({ message: 'Nome e depoimento são obrigatórios.' }, { status: 400 });
    }

    // 2. Prepara os dados obrigatórios para o schema do DB
    const firstName = name.trim().split(' ')[0];
    const userInitials = name.trim().charAt(0).toUpperCase();
    const currentDate = new Date().toISOString(); // GERA DATA/HORA ATUAL (CORREÇÃO FINAL)

    // 3. Inserção no Supabase com TODOS os campos NOT NULL preenchidos
    const { error } = await supabase
      .from('testimonials')
      .insert({ 
        // CAMPOS OBRIGATÓRIOS (NOT NULL) DO SEU SCHEMA:
        initials: userInitials, 
        firstname: firstName, 
        date: currentDate, // ESSA LINHA RESOLVE O ERRO 23502
        
        // OUTROS CAMPOS ENVIADOS:
        fullname: name.trim(), 
        content: content.trim(), 
        // O campo 'approved' usará o valor DEFAULT(false)
      });

    if (error) {
      console.error('Supabase Insertion Error:', error);
      return NextResponse.json({ message: 'Falha ao salvar no banco de dados. (Verifique RLS e campos NOT NULL)', error: error.message }, { status: 500 });
    }

    // Sucesso
    return NextResponse.json({ message: 'Depoimento enviado com sucesso e aguardando aprovação!' }, { status: 201 });
  } catch (e) {
    // Erro de parsing JSON ou outros erros de servidor
    console.error('API Catch Error:', e);
    return NextResponse.json({ message: 'Erro interno do servidor.' }, { status: 500 });
  }
}