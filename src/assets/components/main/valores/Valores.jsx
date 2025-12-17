import React from 'react';
import '../../Root.css';
import './Valores.css'


const Valores = ({ceosImg, alt, CEOs, CEO1, CEO2, missao, visao, navValores}) => {
    return(
        <section id="valores" className="
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
            <article id="ceo" className="text-center 
                    min-[992px]:flex-none min-[992px]:basis-[350px]
                    min-[773px]:flex-none min-[773px]:basis-[280px]
                    max-[772px]:flex-none max-[772px]:basis-[250px]
                    mx-[20px] flex flex-col items-center" >
                <img src={ceosImg} alt={alt} loading="lazy" className="
                    rounded-[20px]
                    mt-[-15px]
                    mb-[20px]
                    min-[992px]:w-[350px]
                    min-[773px]:w-[280px]
                    max-[772px]:w-[250px]
                    max-[772px]:mt-[1px]
                "/>
                <h2 className="font-montserrat text-[1.6em] text-shadow-[1px_1px_1px_black] text-ceo-fonte mb-[5px] font-[700]">{CEOs}</h2>
                <p className="font-montserrat text-[clamp(1em,1.5vw,1.1em)] font-[500] text-shadow-[1px_1px_1px_black] text-ceo-fonte">{CEO1}</p>
                <p className="font-montserrat text-[clamp(1em,1.5vw,1.1em)] font-[500] text-shadow-[1px_1px_1px_black] text-ceo-fonte">{CEO2}</p>
            </article>
            <article id="org" className="text-center max-w-[688px] mx-[20px] flex flex-col">
                <h2 className="font-montserrat text-[clamp(1.5em,1.8vw,1.9em)] font-[700] text-shadow-[1px_1px_1px_black] uppercase text-ceo-fonte">Missão</h2>
                <p className="font-montserrat text-[clamp(1em,1.8vw,1.2em)] font-[450] text-shadow-[1px_1px_1px_black] text-ceo-fonte">{missao}</p><br/>
                <h2 className="font-montserrat text-[clamp(1.5em,1.8vw,1.9em)] font-[700] text-shadow-[1px_1px_1px_black] uppercase text-ceo-fonte">Visão</h2>
                <p className="font-montserrat text-[clamp(1em,1.8vw,1.2em)] font-[450] text-shadow-[1px_1px_1px_black] text-ceo-fonte">{visao}</p>
                <br/>
                <h2 className="font-montserrat text-[clamp(1.5em,1.8vw,1.9em)] font-[700] text-shadow-[1px_1px_1px_black] uppercase text-ceo-fonte">Valores</h2>
                <ul>
                    {navValores.map((valores, index) => (
                        <li className="font-montserrat text-[clamp(1em,1.8vw,1.2em)] font-[450] text-shadow-[1px_1px_1px_black] text-ceo-fonte" key={index}>{valores.valor}</li>
                    ))}
                </ul>
            </article>
        </section>
    );
};

export default Valores;