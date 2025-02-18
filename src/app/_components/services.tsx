"use client"
import useEmblaCarousel from 'embla-carousel-react'
import{ ChevronLeft, ChevronRight,Scissors, Syringe, CarTaxiFront, Hotel} from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'

const services = [
    {
      title: "Banho & Tosa",
      description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
      duration: "1h",
      price: "a partir de R$60",
      icon: <Scissors />,
      linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },
    {
        title: "Hotel para pets",
        description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
        duration: "1h",
        price: "a partir de R$70 a diária",
        icon: <Hotel />,
        linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
      },
]


export function Services() {

    const [ emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        slidesToScroll: 1,
        breakpoints:{
            "(min-width: 768px)":{slidesToScroll: 3}

        }
    })

    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                
                <h1 className="text-4xl font-bold mb-12">Serviços</h1>
            <div className="relative">
                <div className='overflow-hidden ref={emblaRef}'>
                    <div className='flex'>
                        {services.map((item, index) =>(
                            <div key={index} className='flex-[0_0_100%] min-w-0 md:[0_0_calc(100%/2)] px-3'>
                                <article className='bg-[#1a293b text-white rounded-2xl p-6 space-y-4 h-full flex
                                flex-col'>

                                </article>
                            </div>

                        ))}

                    </div>
                </div>

            </div >

            </div>

        </section>


    )
}