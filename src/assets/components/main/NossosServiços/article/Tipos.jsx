import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import "../../../Root.css";

const Tipos = ({ TituloServico, descricao, navImgs }) => {
  // 1. Configuração do Embla Carousel
  // A opção 'active: false' no breakpoint desativa o carrossel em telas grandes
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    dragFree: true, // Sensação de "free scroll" similar ao nativo
    containScroll: 'trimSnaps',
    breakpoints: {
      '(min-width: 1408px)': { active: false },
    }
  });

  // 2. Estado para a Barra de Progresso
  const [scrollProgress, setScrollProgress] = useState(0);

  // 3. Lógica para atualizar a barra de progresso
  const onScroll = useCallback((emblaApi) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);

    return () => {
      emblaApi.off('reInit', onScroll);
      emblaApi.off('scroll', onScroll);
    };
  }, [emblaApi, onScroll]);

  return (
    <article className="text-center mt-[15px] mb-[30px] w-[100%] flex flex-col items-center">
      <h2 className="font-montserrat text-[1.5em] font-[700] text-ceo-fonte mb-5px max-[992px]:mb-[5px]">
        {TituloServico}
      </h2>
      <p className="text-black font-montserrat max-w-[870px] w-[100%] py-[2.5px]">
        {descricao}
      </p>

      {/* Container Principal */}
      <div className="bg-header mt-[20px] h-auto w-[100%] flex flex-col items-center justify-evenly overflow-hidden gap-y-[20px] py-[10px]">
        
        {/* Wrapper do Embla (Viewport) */}
        {/* Quando ativo (<=1408px), o overflow-hidden segura o carrossel. 
            Quando inativo (>1408px), age como um container flex normal */}
        <div 
          className="w-[100%] overflow-hidden max-[1408px]:cursor-grab max-[1408px]:active:cursor-grabbing" 
          ref={emblaRef}
        >
          {/* Container dos Slides (flex-row) */}
          <div className="flex flex-row items-center pointer-events-none max-[1408px]:gap-y-[20px] justify-evenly max-[1408px]:justify-start user-select-none">
            {navImgs.map((item, index) => (
              // Slide Individual
              <div
                key={index} 
                className="flex-shrink-0 bg-sobre-fundo select-none h-[290px] w-[260px] pt-[5px] py-[10px] flex items-center flex-col mx-[10px] 
                           max-[992px]:pt-[5px] 
                           max-[992px]:py-[5px]"
              >
                <img 
                  className="h-[250px] w-[250px] object-cover pointer-events-none
                             max-[992px]:w-[240px] max-[992px]:h-[240px] " 
                  src={item.src} 
                  alt={item.alt} 
                />
                <p className="font-sriracha text-black text-[1.05em] px-[2px] mt-[6px]
                             max-[992px]:h-[40px] 
                             max-[992px]:px-[6px]">
                  {item.data}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Barra de Progresso (Visível apenas <= 1408px) */}
        <div className="hidden transition duration-1000 ease-in-out  max-[1408px]:flex w-[80%] max-w-[300px] h-[8px] bg-gray-300 rounded-full mt-[-9px] overflow-hidden">
          <div
            className="h-full bg-ceo-fonte" // Use a cor do seu tema aqui
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

      </div>
    </article>
  );
};

export default Tipos;