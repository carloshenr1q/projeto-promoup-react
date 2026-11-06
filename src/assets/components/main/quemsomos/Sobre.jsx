import React from 'react';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';

const Sobre = ({subtitulo, frase1, frase2}) => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

    return(
        <section id="quem-somos" className="scroll-mt-[66px] overflow-hidden text-center w-full h-auto min-h-fit py-12 md:py-16 bg-sobre-fundo flex flex-col items-center justify-center">
            <article ref={sectionRef} id="leading" className="max-w-[930px] w-full px-5 flex flex-col items-center gap-5 max-[992px]:gap-3.5 overflow-hidden">
                <h2 className={`font-montserrat text-[clamp(2.5em,4vw,3.75em)] tracking-[3.5px] font-bold text-marketing-fonte leading-tight transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
                }`}>
                    {subtitulo}
                </h2>
                <p className={`font-poppins text-[clamp(1em,2vw,1.25em)] font-[250] leading-[1.6] text-black transition-all duration-700 delay-150 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}>
                    {frase1}
                </p>
                <p className={`font-poppins text-[clamp(1em,2vw,1.25em)] font-[250] leading-[1.6] text-black transition-all duration-700 delay-300 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                    {frase2}
                </p>
            </article>
        </section>
    );
};

export default Sobre;