import { supabase } from '../src/lib/supabase'; // Ajuste conforme seu arquivo

export async function getApprovedTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('fullname, content, initials, image_url')
    .eq('approved', true) // Garante que só apareçam os aprovados
    .order('date', { ascending: false });

  if (error) {
    console.error('Erro ao buscar:', error);
    return [];
  }

  return data.map(t => ({
    content: t.content,
    author: t.fullname,
    role: t.initials,
    // Se não houver imagem no banco, usamos um avatar padrão
    image: t.image_url || '/default-avatar.jpg' 
  }));
}