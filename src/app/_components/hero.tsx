
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import logoImg from '../../../public/pebnovo.jpg'
import catImg from "../../../public/cat-hero.png"
import Image from 'next/image'


export function Hero(){
    return(
       <section className="bg-black text-white relative overflow-hidden">
        <div>
            <Image
            src={logoImg}
            alt="Logo de fundo"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-25 lg:hidden"            
            />
            <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>

        </div>

        <div className="container mx-auto py-1.5 md:pb-1.5 px-2 relative">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
                    data-aos="fade-down"
                    >
                       Seu pet merece todo o cuidado, carinho e atenção especial. 
                    </h1>
                    <p className="lg:text-lg"data-aos="fade-right">
                        Oferecemos os melhores serviços para você para garantir o bem estar e a felicidade do seu amigo de quatro patas.
                    </p>
                    
                    <a data-aos="fade-up"
                        href="https://wa.me/5511962734996?text=Olá,%20vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20produtos!" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center
                                justify-center w-fit gap-2 text-white hover:bg-green-600 transition"
                    >
                        <WhatsappLogo className="w-5 h-5" />
                        Contato via WhatsApp
                    </a>
                    
                    <div className="mt-8">
                     <p className="text-sm mb-4">
                        {/* <b className="bg-black text-white px-2 py-1 rounded-md">10%</b> de desconto em compras a partir de R$200,00! */}
                    </p>
                    <div className="flex mt-4">
                        <div className="w-32 hidden lg:block">
                            <Image
                            src={catImg}
                            alt="catHero"
                            quality={100}
                            className="object-fill"
                            />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="hidden md:block h-full relative">
                <Image
                    src={logoImg}
                    alt='Logo'                    
                    priority
                    className="object-contain"
                    fill
                    sizes="(max-width:768px) 0vw, 50vw"
                    quality={100}                    
                    />                   


                </div>
                
            </article>
        </div>
       </section>
    )
}