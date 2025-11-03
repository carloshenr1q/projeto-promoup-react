import React from 'react';
import '../../Root.css';
import background from "../../../image/images/marketing/background-marketing.webp";

const Marketing = ({h2, link, target, rel, a}) => {
    return (
        <section 
        className="font-montserrat h-[760px] bg-center bg-cover bg-scroll flex items-center" 
        style={{ backgroundImage: `url(${background})` }}
        >
            <article
            className="max-h-[250px] max-w-[700px] min-h-[150px] min-w-[350px] h-[100%] w-[100%] bg-marketing-fundo ml-[7%] flex flex-col items-center justify-center"
            >
                <h2 className="text-[clamp(1.8em,4vw,2.5em)] leading-[1.25] text-center font-[450] w-[650px] text-marketing-fonte ">
                    {h2}
                </h2>
                <br/>
                <a 
                    className="text-[clamp(1em,4vw,1.2em)] font-[450] decoration-none text-marketing-fonte bg-marketing-fundoBotao rounded-[10px] shadow-[0px_0px_15px_rgba(0,0,0,0.301)] p-[15px] transition-all duration-1000 hover:transform-[scale(105%)]" 
                    href={link} 
                    target={target} 
                    rel={rel}>
                    {a}
                </a>
            </article>
        </section>
    )
}

export default Marketing;