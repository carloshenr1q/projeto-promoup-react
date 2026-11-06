import React from 'react';
import './Marketing.css';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';

const Marketing = ({subtitulo, link, target, rel, a}) => {
    const [articleRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

    return (
        <section id="marketing" className="font-montserrat h-[760px] bg-center bg-cover bg-scroll flex items-center overflow-hidden" >
            <article
                ref={articleRef}
                className={`max-h-[250px] max-w-[700px] min-h-[150px] min-w-[340px] h-[100%] w-[100%] bg-gradient-to-br from-[#3d1354]/95 via-[#2C0F39]/95 to-[#190624]/95 backdrop-blur-sm border border-white/10 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.55)] ml-[7%] flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
                }`}
            >
                <h2 className="text-[clamp(1.8em,4vw,2.5em)] leading-[1.25] text-center font-[400] w-[450px] text-marketing-fonte
                max-[992px]:w-[330px]">
                    {subtitulo}
                </h2>
                <br/>
                <a className="btn-pulse-cta text-[clamp(1em,4vw,1.2em)] font-[500] decoration-none text-marketing-fonte bg-gradient-to-r from-[#3b0e4c] via-[#340C43] to-[#260733] border border-[#E48E16]/40 rounded-[10px] p-[14.5px] px-[24px] transition-all duration-300" 
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