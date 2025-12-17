import React from 'react';
import '../Root.css';
import './BolhaWhatsapp.css';

const BolhaWhatsapp = ({orcamento, href, target, rel, src}) => {
    return ( 
        <div id="bolha" className="w-[50px] h-[50px] rounded-[50%] shadow-[1px-2px-10px-black] flex justify-end items-center fixed bottom-[40px] left-[94%]
        max-[992px]:left-[calc(90vw-20px)]
        max-[992px]:bottom-[60px]">
            <p className="backdrop-opacity-[0] invisible"
            >{orcamento}</p>
            <a className="h-[52px] min-w-[52px] w-[52px]" href={href} target={target} rel={rel}>
                <p className="flex text-transparent"></p>
                <img className="h-[100%] w-[52px]" src={src} alt="logo do whatsapp"/>
            </a>
        </div>
    );
}
 
export default BolhaWhatsapp;