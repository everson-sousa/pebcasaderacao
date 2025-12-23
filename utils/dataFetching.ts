import { supabase } from '../src/lib/supabase'; 

export async function getApprovedTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('fullname, content, initials, approved')
    .eq('approved', true) 
    .order('id', { ascending: false });

  if (error) {
    console.error('Erro ao buscar depoimentos:', error.message);
    return [];
  }

  return data.map(t => ({
    content: t.content,
    author: t.fullname,
    role: t.initials,
    image: '/default-avatar.jpg' 
  }));
}