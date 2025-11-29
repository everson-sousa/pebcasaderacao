// utils/dataFetching.ts (Exemplo)

import { supabase } from '../src/app/../lib/supabase'; // Caminho para o seu cliente Supabase

export async function getApprovedTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('id, content, fullname, initials, image_url') // Colunas que você precisa
    .eq('approved', true) // FILTRO ESSENCIAL
    .order('created_at', { ascending: false });

  if (error) {
    
    return []; 
  }

  // Mapeia para o formato que seu carrossel espera
  return data.map(t => ({
      content: t.content,
      author: t.fullname,
      role: t.initials, // Usamos 'initials' para o campo 'role' no carrossel
      image: t.image_url || '/placeholder.jpg', // Use uma imagem padrão se não houver URL
  }));
}