import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imgsData from "../../../../data/imgsData.json";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

const Clientes = ({ titulo }) => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15 });

  // Configuração do Embla Carousel com AutoPlay
  // O breakpoint '(min-width: 993px)' define active: false.
  // Ou seja: Abaixo de 993px (992px para baixo) ele funciona. Acima, ele desliga.
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'center', // Centraliza o item ativo
      breakpoints: {
        '(min-width: 993px)': { active: false },
      }
    },
    [
      Autoplay({ delay: 3000, stopOnInteraction: false })
    ]
  );

  return (
    <section
      ref={sectionRef}
      id="clientes"
      className="scroll-mt-[66px] bg-sobre-fundo pt-[10px] pb-[50px] px-[50px] w-[100%] h-auto overflow-hidden
            max-[992px]:px-0 
            max-[992px]:pt-[0px]
            max-[992px]:pb-[10px]"
    >
      <h2 className="font-montserrat text-[2.5em] font-[700] uppercase text-center text-ceo-fonte
            max-[992px]:text-[2em]
            max-[992px]:my-[-7px]">
        {titulo}
      </h2>

      {/* WRAPPER DO EMBLA (Viewport) */}
      <div
        className="w-[100%] overflow-hidden max-[992px]:cursor-grab max-[992px]:active:cursor-grabbing"
        ref={emblaRef}
      >
        {/* CONTAINER DOS SLIDES */}
        <div
          className="flex w-[100%] 
             min-[993px]:flex-wrap 
             min-[993px]:justify-evenly 
             min-[993px]:gap-[80px] 
             min-[993px]:max-w-[1300px] 
             min-[993px]:m-auto"
        >
          {imgsData.map((item, index) => (
            <div 
              key={index}
              style={{ transitionDelay: isVisible ? `${index * 75}ms` : '0ms' }}
              className={`flex items-center justify-center flex-shrink-0 
                         max-[992px]:mx-[40px] 
                         min-[993px]:w-auto
                         max-[992px]:select-none
                         transition-all duration-700 ease-out
                         ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
            >
              <img
                loading="lazy"
                className="w-[clamp(50px,15vw,245px)] object-contain
                           max-[992px]:w-[190px]
                           max-[992px]:pointer-events-none 
                           max-[992px]:select-none"
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientes;