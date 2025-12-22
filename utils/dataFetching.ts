// utils/dataFetching.ts
import { supabase } from '../src/lib/supabase'; // Verifique se este caminho está correto

export async function getApprovedTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('fullname, content, initials, image_url')
    .eq('approved', true) 
    .order('date', { ascending: false });

  if (error) {
    // Altere para ver o erro real no terminal do VS Code
    console.error('Erro detalhado do Supabase:', error.message, error.hint);
    return [];
  }

  return data.map(t => ({
    content: t.content,
    author: t.fullname,
    role: t.initials,
    image: t.image_url || '/default-avatar.jpg' 
  }));
}