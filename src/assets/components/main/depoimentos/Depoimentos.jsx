import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import "../../Root.css";
import depoimentosData from "../../../../data/depoimentosData.json";

const Depoimentos = ({ titulo }) => {
  // 1. Configuração do Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center', // Importante para o efeito de escala (item ativo no meio)
    skipSnaps: false,
  });

  // 2. Funções de Navegação (Setas)
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // 3. Lógica do Efeito Scale (Tween)
  const [tweenValues, setTweenValues] = useState([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = event === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        // Fator de escala: 1 (centro) até ~0.8 (bordas)
        const tweenValue = 1 - Math.abs(diffToTarget * 0.4); 
        // Clamp para evitar valores negativos ou gigantes
        const scale = Math.max(0.8, Math.min(1, tweenValue));
        // Opacidade opcional para enfatizar o centro
        const opacity = Math.max(0.5, Math.min(1, tweenValue));

        // Aplica o estilo diretamente no elemento DOM para performance
        const slideNode = emblaApi.slideNodes()[slideIndex];
        const slideInner = slideNode.querySelector('.slide_inner');
        
        if (slideInner) {
            slideInner.style.transform = `scale(${scale})`;
            slideInner.style.opacity = `${opacity}`;
        }
      });
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on('scroll', onScroll);
    emblaApi.on('reInit', onScroll);
  }, [emblaApi, onScroll]);

  return (
    <section className="bg-header w-[100%] h-[100%] max-h-[600px] py-[40px] flex flex-col justify-center items-center overflow-hidden">
      
      <article className="w-[100%] max-w-[1000px] flex flex-col justify-center items-center relative">
        <h2 className="font-montserrat text-[clamp(2em,15vw,2.5em)] font-[400] uppercase text-[white] mb-[30px] text-center max-[992px]:text-[2em]">
          {titulo}
        </h2>

        {/* Wrapper Relativo para posicionar as setas */}
        <div className="relative w-full px-[50px] ">
          
          {/* VIEWPORT DO EMBLA */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex touch-pan-y shadow-inner cursor-grab active:cursor-grabbing">
              {depoimentosData.map((item, index) => (
                <div 
                  key={index} 
                  // flex-[0_0_X%] define a largura do slide. 
                  // 100% no mobile, 60% no desktop para que os vizinhos apareçam
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_60%] lg:flex-[0_0_50%] pl-[10px]"
                >
                  {/* slide_inner é quem recebe a animação de escala */}
                  <div className="slide_inner transition-transform duration-75 ease-out text-[white] flex flex-col justify-center items-center w-full min-h-[300px] bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm pointer-events-none select-none user-select-none">
                    <div>
                      <p className="font-poppins font-[250] text-center italic text-[1.1em]">
                        {item.texto}
                      </p>
                    </div>
                    <div className="text-center mt-[25px]">
                      <p className="font-poppins font-[600] text-[yellow] tracking-wide">
                        {item.cargo}
                      </p>
                      <p className="font-[450] text-[white] mt-1">
                        {item.autor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTÃO ESQUERDA (Prev) */}
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 z-10 w-[40px] h-[40px] flex items-center justify-center text-white hover:text-yellow transition-colors cursor-pointer "
            onClick={scrollPrev}
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* BOTÃO DIREITA (Next) */}
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 z-10 w-[40px] h-[40px] flex items-center justify-center text-white hover:text-yellow transition-colors cursor-pointer "
            onClick={scrollNext}
            aria-label="Próximo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>
      </article>
    </section>
  );
}

export default Depoimentos;