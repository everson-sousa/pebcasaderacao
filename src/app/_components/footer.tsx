// import golden from'../../../public/golden.png'
// import pedigree from '../../../public/pedigree.png'
// import primier from"../../../public/primier.png"
// import royal from "../../../public/royal.png"
// import whiskas from "../../../public/whiskas.png"
// import premier from "../../../public/primier.png"
// import magnus from "../../../public/magnus.png"
// import Image from 'next/image'
// import { FacebookLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
// import Link from 'next/link';

// const brands = [
//     {name: 'Royal Canin', logo:royal},
//     {name: 'Golden', logo: golden},
//     {name:'Premier', logo: primier},    
//     {name: 'Whiskas', logo: whiskas},
//     {name:'Pedigree', logo:pedigree},
//     {name:'Magnus', logo:magnus},





// ]
// export function Footer() {
//     return(
//         <section className='bg-orange-500 py-16 text-white'>
//             <div className='container mx-auto px-4'>
//                 <div className='border-b border-white-20 pb-4'>
//                     <h4 className='text 3xl font-semibold mb-8 text-center'>Principais marcas que trabalhamos</h4>

//                     <div className='grid grid-cols-2 lg:grid-5 gap-8'>
//                         {brands.map((item,index)=>(
//                             <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
//                                 <Image
//                                     src={item.logo}
//                                     alt={item.name}
//                                     width={100}
//                                     height={60}
//                                     quality={100}
//                                     style={{
//                                         width: "auto",
//                                         height:"auto"
//                                     }}
//                                     className="object-contain"
//                                     />
//                             </div>

//                         ))}
//                     </div>
//                 </div>
//                 <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
//                         <div>
//                             <h3 className='text-2xl font-semibold mb-2'>P&B Casa de Ração</h3>
//                             <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação!</p>
//                             <a 
//                         href="https://wa.me/5511962734996?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center
//                                 justify-center w-fit gap-2 text-white hover:bg-green-600 transition"
//                     >
//                         <WhatsappLogo className="w-5 h-5" />
//                         Contato via WhatsApp
//                     </a>
//                         </div>

//                         <div>
//                             <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                            
//                             {/* CORREÇÃO DO E-MAIL: Usando tag <a> dentro de <p> para alinhar */}
//                             <p>
//                                 <a 
//                                     href="mailto:pebcasaderacoes2019@gmail.com?subject=Contato&body=Olá,%20quero%20fazer%20um%20orçamento."
//                                     // Removendo o 'ml-2' e garantindo o estilo 'hover:underline'
//                                     className="text-white hover:underline transition-all" 
//                                 >
//                                     E-mail:pebcasaderacoes2019@gmail.com
//                                 </a>
//                             </p>

//                             <p>telefone:(11)96273-4996</p>
//                             <p>Endereço: Estrada Takashi Kobata, 31 Jardim Europa, Suzano SP</p>
//                         </div>
//                         {/* <p>Email:eloa.palopoli@hotmail.com</p> */}

//                         <div>
//                             <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
//                             <div className='flex gap-4'>
//                          <Link 
//                                 href="https://www.instagram.com/pebpetshop/" 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                             >
//                                 <InstagramLogo className="w-8 h-8" />
//                             </Link> 

//                             <Link 
//                                 href="https://www.facebook.com/p/PB-Casa-de-Ra%C3%A7%C3%B5es-100064794186878/?locale=pt_BR" 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                                                            >
//                                 <FacebookLogo className="w-8 h-8" />
                                
//                             </Link>

                               

//                             </div>
//                             <br></br>
//                             <h4>Desenvolvido por: Everson Almeida WhatsApp (11)98989-3721</h4>
//                         </div>
//                 </footer>
//             </div>
//         </section>
//     )

// }
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link';

// Ajuste: Trocamos as variáveis importadas por caminhos de texto direto (Strings)
// O Next.js entende que "/" se refere à pasta public
const brands = [
    { name: 'Royal Canin', logo: '/royal.png' },
    { name: 'Golden', logo: '/golden.png' },
    { name: 'Premier', logo: '/primier.png' }, // Mantive o nome do arquivo original (primier)
    { name: 'Whiskas', logo: '/whiskas.png' },
    { name: 'Pedigree', logo: '/pedigree.png' },
    { name: 'Magnus', logo: '/magnus.png' },
]

export function Footer() {
    return (
        <section className='bg-orange-500 py-16 text-white'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-white-20 pb-4'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Principais marcas que trabalhamos</h4>

                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={60}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                        objectFit: "contain" // Garante que a logo não distorça
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>P&B Casa de Ração</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação!</p>
                        <a
                            href="https://wa.me/5511962734996?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 text-white hover:bg-green-600 transition"
                        >
                            <WhatsappLogo className="w-5 h-5" />
                            Contato via WhatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>

                        <p>
                            <a
                                href="mailto:pebcasaderacoes2019@gmail.com?subject=Contato&body=Olá,%20quero%20fazer%20um%20orçamento."
                                className="text-white hover:underline transition-all"
                            >
                                E-mail: pebcasaderacoes2019@gmail.com
                            </a>
                        </p>

                        <p>Telefone: (11) 96273-4996</p>
                        <p>Endereço: Estrada Takashi Kobata, 31 Jardim Europa, Suzano SP</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <Link
                                href="https://www.instagram.com/pebpetshop/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstagramLogo className="w-8 h-8 hover:text-gray-200 transition-colors" />
                            </Link>

                            <Link
                                href="https://www.facebook.com/p/PB-Casa-de-Ra%C3%A7%C3%B5es-100064794186878/?locale=pt_BR"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FacebookLogo className="w-8 h-8 hover:text-gray-200 transition-colors" />
                            </Link>
                        </div>
                        <br></br>
                        <h4 className="text-sm opacity-80">Desenvolvido por: Everson Almeida WhatsApp (11)98989-3721</h4>
                    </div>
                </footer>
            </div>
        </section>
    )
}