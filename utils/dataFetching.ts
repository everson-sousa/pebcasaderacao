import { supabase } from "@/lib/supabase";

// app/utils/dataFetching.ts
export async function getApprovedTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('fullname, content, initials, image_url')
    .eq('approved', true) // Filtro essencial para o controle da Eloá
    .order('date', { ascending: false });

  if (error) return [];

  return data.map(t => ({
    content: t.content,
    author: t.fullname,
    role: t.initials,
    image: t.image_url || '/default-avatar.jpg' // Placeholder para novos depoimentos
  }));
}