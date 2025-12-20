// import { About } from "./_components/about";
// import { Hero } from "./_components/hero";
// import {Services} from "./_components/services";
// import { Testimonials } from "./_components/testimonials";
// import { Footer} from "./_components/footer"

// export default function Home(){
//   console.log('Chave Pública:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
//   return(
//   <main>
//     <Hero/>
//     <About/>
//     <Services/>
//     <Testimonials/> 
//     <Footer/>
//   </main>
//   )
// }
// app/page.tsx

import {About} from "./_components/about";
import {Hero} from "./_components/hero";
import {Services} from "./_components/services";
import {Footer} from "./_components/footer";

// 1. Importe o componente cliente Testimonials
import { Testimonials } from "./_components/testimonials"; 

// 2. Importe a função de busca do servidor.
// Ajuste o caminho de importação conforme a estrutura correta do seu projeto:
//import { getApprovedTestimonials } from "./../../../pebcasaderacao/utils/dataFetching"
import { getApprovedTestimonials } from "../../utils/dataFetching";
// OBRIGATÓRIO: Torne a função Home assíncrona para usar o await
export default async function Home() { 
  
  // 3. BUSCA DE DADOS DINÂMICA (Executada no servidor)
  const dynamicTestimonials = await getApprovedTestimonials();

  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      
      {/* 4. PASSA OS DADOS COMO PROPRIEDADE PARA O COMPONENTE CLIENTE */}
      <Testimonials initialData={dynamicTestimonials} />
      
      <Footer/>
    </main>
  );
}