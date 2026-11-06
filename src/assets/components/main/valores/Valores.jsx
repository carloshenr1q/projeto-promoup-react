import React from 'react';
import './Valores.css';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';


const Valores = ({ceosImg, alt, CEOs, CEO1, CEO2, missao, visao, navValores}) => {
    const [ceoRef, isCeoVisible] = useScrollAnimation({ threshold: 0.15 });
    const [orgRef, isOrgVisible] = useScrollAnimation({ threshold: 0.15 });

    return(
        <section id="valores" className="
            overflow-x-hidden
            min-[993px]:h-[650px]     
            w-full
            flex
            items-center
            justify-around
            leading-[1.25]

            max-[992px]:h-[550px]

            max-[772px]:h-[900px]
            max-[772px]:flex-col
            max-[772px]:justify-evenly
        ">
            <article ref={ceoRef} id="ceo" className="text-center 
                    min-[992px]:flex-none min-[992px]:basis-[350px]
                    min-[773px]:flex-none min-[773px]:basis-[280px]
                    max-[772px]:flex-none max-[772px]:basis-[250px]
                    mx-[20px] flex flex-col items-center" >
                <img src={ceosImg} alt={alt} loading="lazy" className={`
                    rounded-[20px]
                    mt-[-15px]
                    mb-[20px]
                    min-[992px]:w-[350px]
                    min-[773px]:w-[280px]
                    max-[772px]:w-[250px]
                    max-[772px]:mt-[1px]
                    transition-all duration-700 ease-out
                    ${isCeoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                `}/>
                <h2 className={`font-montserrat text-[1.6em] text-shadow-[1px_1px_1px_black] text-ceo-fonte mb-[5px] font-[700] transition-all duration-700 delay-150 ease-out ${
                    isCeoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {CEOs}
                </h2>
                <p className={`font-montserrat text-[clamp(1em,1.5vw,1.1em)] font-[500] text-shadow-[1px_1px_1px_black] text-ceo-fonte transition-all duration-700 delay-300 ease-out ${
                    isCeoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {CEO1}
                </p>
                <p className={`font-montserrat text-[clamp(1em,1.5vw,1.1em)] font-[500] text-shadow-[1px_1px_1px_black] text-ceo-fonte transition-all duration-700 delay-[450ms] ease-out ${
                    isCeoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    {CEO2}
                </p>
            </article>
            <article ref={orgRef} id="org" className="text-center max-w-[688px] mx-[20px] flex flex-col">
                <h2 className={`font-montserrat text-[clamp(1.5em,1.8vw,1.9em)] font-[700] text-shadow-[1px_1px_1px_black] uppercase text-ceo-fonte transition-all duration-700 ease-out ${
                    isOrgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}>
                    Missão
                </h2>
                <p className={`font-montserrat text-[clamp(1em,1.8vw,1.2em)] font-[450] text-shadow-[1px_1px_1px_black] text-ceo-fonte transition-all duration-700 delay-150 ease-out ${
                    isOrgVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                    {missao}
                </p>
                <br/>
                <h2 className={`font-montserrat text-[clamp(1.5em,1.8vw,1.9em)] font-[700] text-shadow-[1px_1px_1px_black] uppercase text-ceo-fonte transition-all duration-700 delay-200 ease-out ${
                    isOrgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}>
                    Visão
                </h2>
                <p className={`font-montserrat text-[clamp(1em,1.8vw,1.2em)] font-[450] text-shadow-[1px_1px_1px_black] text-ceo-fonte transition-all duration-700 delay-300 ease-out ${
                    isOrgVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                    {visao}
                </p>
                <br/>
                <h2 className={`font-montserrat text-[clamp(1.5em,1.8vw,1.9em)] font-[700] text-shadow-[1px_1px_1px_black] uppercase text-ceo-fonte transition-all duration-700 delay-[400ms] ease-out ${
                    isOrgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}>
                    Valores
                </h2>
                <ul className={`transition-all duration-700 delay-500 ease-out ${
                    isOrgVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                    {navValores.map((valores, index) => (
                        <li className="font-montserrat text-[clamp(1em,1.8vw,1.2em)] font-[450] text-shadow-[1px_1px_1px_black] text-ceo-fonte" key={index}>{valores.valor}</li>
                    ))}
                </ul>
            </article>
        </section>
    );
};

export default Valores;