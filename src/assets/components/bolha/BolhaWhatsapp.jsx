import React from 'react';
import './BolhaWhatsapp.css';

const BolhaWhatsapp = ({orcamento, href, target, rel, src}) => {
    return ( 
        <div
            id="bolha"
            className="group fixed bottom-6 right-6 z-50 flex items-center justify-end max-[992px]:bottom-5 max-[992px]:right-5"
        >
            {/* Balão de mensagem (Tooltip no Desktop) */}
            <div className="max-[992px]:hidden pointer-events-none mr-3.5 px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-800 font-montserrat text-[0.9rem] font-[500] rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.18)] border border-gray-200/80 whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out relative">
                <span>{orcamento}</span>
                {/* Setinha lateral apontando para o botão */}
                <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-gray-200/80 rotate-45"></span>
            </div>

            {/* Botão Circular do WhatsApp */}
            <a
                className="whatsapp-btn-wrapper relative flex items-center justify-center w-[56px] h-[56px] max-[992px]:w-[52px] max-[992px]:h-[52px] rounded-full bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] transition-all duration-300 ease-out active:scale-95"
                href={href}
                target={target}
                rel={rel}
                aria-label={orcamento || "Contato via WhatsApp"}
            >
                <img
                    className="w-full h-full object-contain rounded-full select-none pointer-events-none"
                    src={src}
                    alt="Logo do WhatsApp"
                />
            </a>
        </div>
    );
}
 
export default BolhaWhatsapp;