import React from 'react';
import '../../Root.css';

const Sobre = ({subtitulo, frase1, frase2}) => {
    return(
        <section id="quem-somos" className="text-center max-h-[500px] h-[100%] bg-sobre-fundo flex flex-col items-center justify-center">
            <article id="leading" className="max-w-[930px] w-100% mt-[50px] mb-[30px] max-[992px]:mt-[40px] mb-[15px] px-[5px]">
                <h2 className="font-montserrat text-[clamp(2.5em,4vw,3.75em)] tracking-[3.5px] font-bold text-marketing-fonte mb-[38px] max-[992px]:mb-[15.5px]">
                    {subtitulo}
                </h2>
                <p className="font-poppins text-[clamp(1em,2vw,1.25em)] font-[250] leading-[1.6] mb-[30px] text-black max-[992px]:mb-[15px]">{frase1}</p>
                <p className="font-poppins text-[clamp(1em,2vw,1.25em)] font-[250] leading-[1.6] mb-[30px] text-black max-[992px]:mb-[15px]">{frase2}</p>
            </article>
        </section>
    );
};

export default Sobre;