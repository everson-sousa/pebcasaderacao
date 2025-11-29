// "use client"

// import useEmblaCarousel from 'embla-carousel-react'
// import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react'
// import { WhatsappLogo } from '@phosphor-icons/react'
// import tutor1 from '../../../public/tutor1.jpg'
// import tutor2 from '../../../public/tutor2.jpg'
// import tutor3 from '../../../public/tutor3.jpg'
// import Image from 'next/image'

// // 1. IMPORTAR O COMPONENTE DO FORMULÁRIO (Ajuste o caminho se necessário)
// import SendTestimonialForm from './SendTestimonialForm'; 

// export function Testimonials() {
//   const testimonials = [
//     {
//       content:
//         "Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
//       author: "Cleber Augusto",
//       role: "Tutor da Luna (Golden Retriever)",
//       image: tutor2,
//     },
//     {
//       content:
//         "O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
//       author: "Rafaela Gomes",
//       role: "Tutora do Thor (Bulldog Francês)",
//       image: tutor1
//     },
//     {
//       content: "Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
//       author: "Camilo Fernandes",
//       role: "Tutor da Mel e do Max",
//       image: tutor3,
//     },
//   ]
//   

//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: false,
//     
//  
//   })


//   function scrollPrev() {
//     emblaApi?.scrollPrev();
//   }

//   function scrollNext() {
//     emblaApi?.scrollNext();
//   }

//   return (
//     <section className="bg-[#ffd449] py-16">
//       <div className="container mx-auto px-4">

//         <h2 className="text-4xl font-bold text-center mb-12">Depoimentos</h2>

//         <div className="relative max-w-4xl mx-auto">

//           <div className='overflow-hidden' ref={emblaRef}>
//             <div className='flex'>
//               {testimonials.map((item, index) => (
//                 <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
//                   <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
//                   <div className='flex flex-col items-center text-center space-y-4'>
//                   <div className='relative w-24 h-24'> {/* Adicione altura fixa */}
//                     <Image
//                       src={item.image}
//                       alt={item.author}
//                       fill
//                       sizes='96px'
//                       className='object-cover rounded-full'
//                       priority={index === 0} // Melhora performance
//                     />
//                   </div>
//                   <p className='text-gray-200'>{item.content}</p>
//                   <div>
//                   <p className='font-bold'>{item.author}</p>
//                   <p className='text-sm text-gray-400'>{item.role}</p>
//                   </div>
//                   </div>
//                   </article>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
//             onClick={scrollPrev}
//           >
//             <ChevronLeft className='w-6 h-6 text-gray-600' />
//           </button>

//           <button
//             className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
//             onClick={scrollNext}
//           >
//             <ChevronRight className='w-6 h-6 text-gray-600' />
//           </button>

//         </div>

//         {/* 2. RENDERIZAR O FORMULÁRIO ABAIXO DO CARROSSEL */}
//         <div className="mt-16 pt-8 border-t border-gray-400 max-w-lg mx-auto">
//             <h3 className="text-2xl font-bold text-center mb-6">Deixe seu Depoimento!</h3>
//             <SendTestimonialForm />
//         </div>

//       </div>
//     </section>
//   )
// }
"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react' // Usando lucide-react (mais comum)
import Image from 'next/image'

// Importe o componente de formulário (Ajuste o caminho se necessário)
import SendTestimonialForm from './SendTestimonialForm'; 

// 1. Defina a interface para o formato de dados esperado (Corresponde ao que o dataFetching retorna)
interface TestimonialData {
  content: string;
  author: string;
  role: string | null;
  image: string; // Esperamos uma string de URL ou caminho de imagem
}


// 2. CORREÇÃO DE ERRO: A função aceita o array de dados tipado
export function Testimonials({ initialData }: { initialData: TestimonialData[] }) {
  
  // 3. O array de dados dinâmicos
  const testimonials = initialData;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  // Se não houver depoimentos aprovados (ex: array vazio), podemos mostrar uma mensagem:
  if (testimonials.length === 0) {
      return (
          <section className="bg-[#f0f0f0] py-16">
              <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Depoimentos</h2>
                  <p className="text-gray-600 mb-8">
                      Nenhum depoimento aprovado ainda. 
                      <span className='font-semibold'>Seja o primeiro a deixar o seu!</span>
                  </p>
                  <div className='max-w-lg mx-auto'>
                     <SendTestimonialForm />
                  </div>
              </div>
          </section>
      );
  }

  return (
    <section className="bg-[#ffd449] py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Depoimentos</h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Carrossel Embla */}
                <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex'>
                        {testimonials.map((item, index) => (
                            <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                    <div className='flex flex-col items-center text-center space-y-4'>
                                        <div className='relative w-24 h-24'> 
                                            <Image
                                                // ATENÇÃO: Se o Supabase não retornar URL, use um placeholder
                                                src={item.image || '/default-avatar.jpg'} 
                                                alt={item.author}
                                                fill
                                                sizes='96px'
                                                className='object-cover rounded-full'
                                            />
                                        </div>
                                        <p className='text-gray-200'>{item.content}</p>
                                        <div>
                                            <p className='font-bold'>{item.author}</p>
                                            <p className='text-sm text-gray-400'>{item.role}</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botões de Navegação */}
                <button
                    className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                    onClick={scrollPrev}
                >
                    <ChevronLeft className='w-6 h-6 text-gray-600' />
                </button>
                <button
                    className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                    onClick={scrollNext}
                >
                    <ChevronRight className='w-6 h-6 text-gray-600' />
                </button>
            </div>

            {/* Renderiza o formulário abaixo do carrossel */}
            <div className="mt-16 pt-8 border-t border-gray-400 max-w-lg mx-auto">
                <h3 className="text-2xl font-bold text-center mb-6">Deixe seu Depoimento!</h3>
                <SendTestimonialForm />
            </div>

        </div>
    </section>
  )
}