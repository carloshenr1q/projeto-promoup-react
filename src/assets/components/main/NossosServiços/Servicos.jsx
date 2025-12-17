import React from 'react';
import '../../Root.css';
import Tipos from './article/Tipos';
import tiposData from '../../../../data/tiposData.json';

const Servicos = ({titulo}) => {
    return(
        <section id="servicos" className="bg-sobre-fundo leading-[1.25] w-[100%] height-auto flex content-center items-center flex-col">
            <h2 className="font-montserrat text-[2.5em] font-[750] text-center uppercase text-ceo-fonte mt-[15px] mb-[10px] 
            max-[992px]:text-[2.1em]
            ">
            {titulo}</h2>
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