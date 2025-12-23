// import { Hero } from "./_components/hero";
// import { Services } from "./_components/services";
// import { Testimonials } from "./_components/testimonials";
// import { Footer } from "./_components/footer";
// import { getApprovedTestimonials } from "utils/dataFetching";

// export const revalidate = 0; 

// export default async function Home() {
//   const testimonialsData = await getApprovedTestimonials();

//   return (
//     <main className="bg-white min-h-screen">
//       <Hero />
//       <Services />
//       {/* Passa os dados do Supabase para o componente cliente */}
//       <Testimonials initialData={testimonialsData} />
//       <Footer />
//     </main>
//   );
// }
// Atualizando para forçar novo build
import { Hero } from "./_components/hero";
import { About } from "./_components/about"; // <--- Importamos aqui
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { Footer } from "./_components/footer";
import { getApprovedTestimonials } from "utils/dataFetching";

export const dynamic = 'force-dynamic';
export const revalidate = 0; 

export default async function Home() {
  const testimonialsData = await getApprovedTestimonials();

  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <About /> {/* <--- Adicionamos o componente aqui, logo abaixo do Hero */}
      <Services />
      <Testimonials initialData={testimonialsData} />
      <Footer />
    </main>
  );
}