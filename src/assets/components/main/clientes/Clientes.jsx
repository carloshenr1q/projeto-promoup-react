import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../../Root.css";
import imgsData from "../../../../data/imgsData.json";

const Clientes = ({ titulo }) => {
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
    <section id="clientes" className="bg-sobre-fundo pt-[10px] pb-[50px] px-[50px] w-[100%] h-auto 
            max-[992px]:px-0 
            max-[992px]:pt-[0px]
            max-[992px]:pb-[10px]">
            
      <h2 className="font-montserrat text-[2.5em] font-[700] uppercase text-center text-ceo-fonte
            max-[992px]:text-[2em]
            max-[992px]:my-[-7px]">
        {titulo}
      </h2>

      {/* WRAPPER DO EMBLA (Viewport) 
         - Em desktop: age como um container normal.
         - Em mobile: age como a janela de visualização do carrossel (overflow-hidden).
      */}
      <div className="w-[100%] overflow-hidden 
      max-[992px]:cursor-grab 
      max-[992px]:active:cursor-grabbing" ref={emblaRef}>
        
        {/* CONTAINER DOS SLIDES 
           - Mobile (Carousel): flex-nowrap, alinhamento padrão do embla.
           - Desktop (Grid estático): flex-wrap, justify-evenly, gap, largura máxima.
        */}
        <div className="flex w-[100%] 
             min-[993px]:flex-wrap 
             min-[993px]:justify-evenly 
             min-[993px]:gap-[80px] 
             min-[993px]:max-w-[1300px] 
             min-[993px]:m-auto
             max-[992px]:gap-x-[]"
             >
             
          {imgsData.map((item, index) => (
            <div 
              key={index} 
              // flex-shrink-0 é essencial para o carrossel não espremer as imagens
              className="flex items-center justify-center flex-shrink-0 
                         max-[992px]:mx-[40px] 
                         min-[993px]:w-auto
                         max-[992px]:user-select-none"
            >
              <img
                className="w-[clamp(50px,15vw,245px)] object-contain
                           max-[992px]:w-[190px]
                           max-[992px]:pointer-events-none 
                           max-[992px]:select-none
                           max-[992px]:user-select-none" // pointer-events-none melhora o scroll touch
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