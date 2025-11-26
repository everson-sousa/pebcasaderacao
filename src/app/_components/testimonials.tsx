// "use client"

// import useEmblaCarousel from 'embla-carousel-react'
// import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
// import { WhatsappLogo } from '@phosphor-icons/react'
// import tutor1 from '../../../public/tutor1.jpg'
// import tutor2 from '../../../public/tutor2.jpg'
// import tutor3 from '../../../public/tutor3.jpg'
// import Image from 'next/image'

// export function Testimonials() {
//   const testimonials = [
//     {
//       content:
//         "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
//       author: "Cleber Augusto",
//       role: "Tutor da Luna (Golden Retriever)",
//       image: tutor2,
//     },
//     {
//       content:
//         "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
//       author: "Rafaela Gomes",
//       role: "Tutora do Thor (Bulldog Francês)",
//       image: tutor1
//     },
//     {
//       content: "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
//       author: "Camilo Fernandes",
//       role: "Tutor da Mel e do Max",
//       image: tutor3,
//     },
//   ]
  

//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: false,
    
 
//   })


//   function scrollPrev() {
//     emblaApi?.scrollPrev();
//   }

//   function scrollNext() {
//     emblaApi?.scrollNext();
//   }

//   return (
//     <section className="bg-[#ffd449] py-16">
//       <div className="container mx-auto px-4">

//         <h2 className="text-4xl font-bold text-center mb-12">Depoimentos</h2>

//         <div className="relative max-w-4xl mx-auto">

//           <div className='overflow-hidden' ref={emblaRef}>
//             <div className='flex'>
//               {testimonials.map((item, index) => (
//                 <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
//                   <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
//                   <div className='flex flex-col items-center text-center space-y-4'>
//                   <div className='relative w-24 h-24'> {/* Adicione altura fixa */}
//                     <Image
//                       src={item.image}
//                       alt={item.author}
//                       fill
//                       sizes='96px'
//                       className='object-cover rounded-full'
//                       priority={index === 0} // Melhora performance
//                     />
//                   </div>
//                   <p className='text-gray-200'>{item.content}</p>
//                   <div>
//                   <p className='font-bold'>{item.author}</p>
//                   <p className='text-sm text-gray-400'>{item.role}</p>
//                   </div>
//                   </div>
//                   </article>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
//             onClick={scrollPrev}
//           >
//             <ChevronLeft className='w-6 h-6 text-gray-600' />
//           </button>

//           <button
//             className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
//             onClick={scrollNext}
//           >
//             <ChevronRight className='w-6 h-6 text-gray-600' />
//           </button>

//         </div>

//       </div>
//     </section>
//   )
// }
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  // Lista de depoimentos reais
  // Você pode substituir por depoimentos puxados via API ou JSON
  const testimonials = [
    {
      content:
        "Excelente atendimento e muito profissional. Meu pet sempre volta feliz!",
      authorFull: "Adriana Conceição",
      role: "Cliente",
      approved: true,
    },
    {
      content:
        "Gostei muito do cuidado com meu cachorro, voltarei com certeza!",
      authorFull: "Bruno Silva",
      role: "Cliente",
      approved: true,
    },
    {
      content:
        "Serviço de qualidade e atendimento impecável. Recomendo!",
      authorFull: "Camila Moura",
      role: "Cliente",
      approved: false, // Não será exibido
    },
    
    {
      "initials": "EA",
      "firstName": "Everson",
      authorFull: "Everson Almeida",
      "content": "Compro todos meus produtos para pets aqui, o atendimento sempre foi excelente, Recomendo!",
      "date": "26/11/2025",
      role: "Cliente",
      "approved": true,
    }
  


  ];

  // Filtra apenas depoimentos autorizados
  const visibleTestimonials = testimonials.filter((t) => t.approved);

  // Transformar nome completo em iniciais (ex: Adriana Conceição → AC)
  function getInitials(name: string) {
    const parts = name.trim().split(" ");
    const first = parts[0]?.charAt(0) ?? "";
    const last = parts[parts.length - 1]?.charAt(0) ?? "";
    return (first + last).toUpperCase();
  }

  // Primeiro nome para mostrar no depoimento
  function getFirstName(name: string) {
    return name.split(" ")[0];
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#ffd449] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Depoimentos</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {visibleTestimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">

                    {/* INICIAIS NO LUGAR DA IMAGEM */}
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-24 h-24 bg-white text-[#1e293b] rounded-full flex items-center justify-center text-3xl font-bold">
                        {getInitials(item.authorFull)}
                      </div>

                      {/* Conteúdo */}
                      <p className="text-gray-200 italic">"{item.content}"</p>

                      {/* Autor */}
                      <div>
                        <p className="font-bold">{getFirstName(item.authorFull)}</p>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>

                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Botões */}
          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 
            absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 
            absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
