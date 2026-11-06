import React from 'react';
import Tipos from './article/Tipos';
import tiposData from '../../../../data/tiposData.json';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';

const Servicos = ({titulo}) => {
    const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.2 });

    return(
        <section id="servicos" className="scroll-mt-[66px] bg-sobre-fundo leading-[1.25] w-[100%] height-auto flex content-center items-center flex-col">
            <h2
                ref={titleRef}
                className={`font-montserrat text-[2.5em] font-[750] text-center uppercase text-ceo-fonte mt-[15px] mb-[10px] max-[992px]:text-[2.1em] transition-all duration-700 ease-out ${
                    isTitleVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
                }`}
            >
                {titulo}
            </h2>
            {tiposData.map((item, index) => (
                <Tipos
                key={index}
                TituloServico={item.TituloServico}
                descricao={item.descricao}
                navImgs={item.navImgs}
                />
            ))}
        </section>
    );
};

export default Servicos;