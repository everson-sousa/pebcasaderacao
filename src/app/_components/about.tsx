// "use client";

// import Image from "next/image";
// import aboutImg from "../../../public/about-1.png";
// import dynamic from "next/dynamic";
// import { MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

// const Check = dynamic(() => import("@phosphor-icons/react").then((mod) => mod.Check), {
//   ssr: false,
// });



// export function About() {
//   return (
//     <section className="bg-[#fdf6ec] py-16">
//       <div className="container px-4 mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
//             <Image
//               src={aboutImg}
//               alt="Cão e Gato"
//               fill
//               quality={100}
//               className="object-[center_top] object-cover hover:scale-110 transition-all duration-300"
//               priority
//               sizes="(max-width: 768px) 100vw, 50vw"
//             />
//           </div>

//           <div className="space-y-6 mt-10 lg:mt-0">
//             <h2 className="text-4xl font-bold">Sobre a P&B Casa de Rações</h2>
//             <p>
//               Desde 2015, a P&B Casa de Rações tem sido referência no fornecimento de alimentos, acessórios e cuidados para
//               pets em Suzano - SP. Localizada no bairro Jardim Europa, nossa missão é oferecer produtos de qualidade para
//               garantir o bem-estar dos animais de estimação.
//             </p>
//             <p>
//               Com um atendimento personalizado e especializado, trabalhamos para atender às necessidades dos nossos clientes
//               e seus pets, sempre prezando pela confiança e carinho que nos tornaram uma escolha confiável na região.
//             </p>
//             <p>Venha nos visitar e descubra como podemos ajudar no cuidado do seu melhor amigo!</p>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <Check className="text-red-500 w-6 h-6 flex-shrink-0" />
//                 <span className="font-semibold text-lg">Aberto desde 2015</span>
//               </li>

//               <li className="flex items-start gap-3">
//                 <Check className="text-red-500 w-6 h-6 flex-shrink-0" />
//                 <span className="font-semibold text-lg">Qualidade no atendimento é a nossa prioridade</span>
//               </li>

//               <li className="flex items-start gap-3">
//                 <Check className="text-red-500 w-6 h-6 flex-shrink-0" />
//                 <div className="flex flex-col gap-1">
//                   <span className="font-semibold text-lg">Aberto todos os dias</span>
//                   <div className="text-gray-600 space-y-1">
//                     <p className="flex gap-2 items-center before:content-['•'] before:text-red-500 before:font-bold">
//                       <span className="font-medium">Segunda à Sexta:</span>
//                       das 09:00 às 18:30
//                     </p>
//                     <p className="flex gap-2 items-center before:content-['•'] before:text-red-500 before:font-bold">
//                       <span className="font-medium">Sábado:</span>
//                       09:00 às 17:00
//                     </p>
//                     <p className="flex gap-2 items-center before:content-['•'] before:text-red-500 before:font-bold">
//                       <span className="font-medium">Domingos e Feriados:</span>
//                       das 09:00 às 13:00
//                     </p>
//                   </div>
//                 </div>
//               </li>

//               <li className="flex items-start gap-3">
//                 <Check className="text-red-500 w-6 h-6 flex-shrink-0" />
//                 <div className="flex flex-col gap-1">
//                   <span className="font-semibold text-lg">Efetuamos Entregas</span>
//                   <div className="text-gray-600 space-y-1">
//                     <p className="flex gap-2 items-center before:content-['•'] before:text-red-500 before:font-bold">
//                       <span className="font-medium">Segunda à Sexta:</span>
//                       das 15:00 às 19:00
//                       <span className="text-red-500 italic text-sm hover:underline transition-all ml-2">
//                         (Consulte nossas taxas e condições via whatsapp!)
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//               </li>
//             </ul>
//             <div className="flex gap-3">
//             <a 
//                         href="https://wa.me/5511962734996?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20entregas!" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="bg-orange-500 px-5 py-2 rounded-md font-semibold flex items-center
//                                 justify-center w-fit gap-2 text-white hover:bg-orange-600 transition"
//                     >
//                         <WhatsappLogo className="w-5 h-5" />
//                         Contato via WhatsApp
//                     </a>
//                     <a 
//                       href="https://www.google.com/maps?q=Estr.+Takashi+Kobata,+31+-+Jardim+Europa,+Suzano+-+SP,+08696-040" 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="bg-red-500 px-5 py-2 rounded-md font-semibold flex items-center
//                                 justify-center w-fit gap-2 text-white hover:bg-red-600 transition"
//                   >
//                       <MapPin className="w-5 h-5" />
//                       Ver localização
//                   </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado da Imagem */}
          <div className="relative" data-aos="fade-right">
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/sobre.png" // <--- VERIFIQUE O NOME DA FOTO NA PASTA PUBLIC E MUDE AQUI
                alt="Foto de cachorro e gato"
                fill
                quality={100}
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Lado do Texto */}
          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-4xl font-bold text-gray-800">
              Sobre a P&B Petshop
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Aqui na P&B, tratamos seu pet como parte da família. Com anos de experiência e muito amor pelos animais, oferecemos um ambiente seguro, limpo e acolhedor.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Profissionais qualificados e apaixonados por pets.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Produtos de alta qualidade para o banho e tosa.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Atendimento personalizado para cada bichinho.
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="https://wa.me/5511962734996?text=Olá,%20gostaria%20de%20conhecer%20mais%20sobre%20o%20Petshop!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200"
              >
                <WhatsappLogo className="w-6 h-6" />
                Falar com a gente
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}