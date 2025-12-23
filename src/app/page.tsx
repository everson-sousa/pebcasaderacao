// import {About} from "./_components/about";
// import {Hero} from "./_components/hero";
// import {Services} from "./_components/services";
// import {Footer} from "./_components/footer";
// import { Testimonials } from "./_components/testimonials"; 
// import { getApprovedTestimonials } from "../../utils/dataFetching";
// // OBRIGATÓRIO: Torne a função Home assíncrona para usar o await
// export default async function Home() { 
  
//   // 3. BUSCA DE DADOS DINÂMICA (Executada no servidor)
//   const dynamicTestimonials = await getApprovedTestimonials();

//   return (
//     <main>
//       <Hero/>
//       <About/>
//       <Services/>
      
      
//       {/* 4. PASSA OS DADOS COMO PROPRIEDADE PARA O COMPONENTE CLIENTE */}
//       <Testimonials initialData={dynamicTestimonials} />
      
      
      
//       <Footer/>
//     </main>
//   );
// }
//import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { Footer } from "./_components/footer";
import { getApprovedTestimonials } from "utils/dataFetching";

export const revalidate = 0; 

export default async function Home() {
  const testimonialsData = await getApprovedTestimonials();

  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Services />
      {/* Passa os dados do Supabase para o componente cliente */}
      <Testimonials initialData={testimonialsData} />
      <Footer />
    </main>
  );
}