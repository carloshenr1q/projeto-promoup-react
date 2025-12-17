import React from 'react';
import '../../Root.css';
import './Marketing.css';

const Marketing = ({subtitulo, link, target, rel, a}) => {
    return (
        <section id="marketing" className="font-montserrat h-[760px] bg-center bg-cover bg-scroll flex items-center" >
            <article className="max-h-[250px] max-w-[700px] min-h-[150px] min-w-[350px] h-[100%] w-[100%] bg-marketing-fundo ml-[7%] flex flex-col items-center justify-center"
            >
                <h2 className="text-[clamp(1.8em,4vw,2.5em)] leading-[1.25] text-center font-[400] w-[450px] text-marketing-fonte
                max-[992px]:w-[350px]">
                    {subtitulo}
                </h2>
                <br/>
                <a className="text-[clamp(1em,4vw,1.2em)] font-[450] decoration-none text-marketing-fonte bg-marketing-fundoBotao rounded-[10px] shadow-[0px_0px_15px_rgba(0,0,0,0.301)] p-[14.5px] transition-all duration-1000 hover:transform-[scale(105%)]" 
                    href={link} 
                    target={target} 
                    rel={rel}
                >
                    {a}
                </a>
            </article>
        </section>
    )
}

export default Marketing;