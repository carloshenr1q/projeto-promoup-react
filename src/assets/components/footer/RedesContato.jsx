import React from 'react';
import '../Root.css';
import './Logos.css';

const RedesContato = ({logo, alt, slogan, redes, href, target, rel, fraseContato, direitos}) => {
    return ( 
        <>
            <div className="bg-header px-[20px] mt-[1px] flex justify-around items-center basis-[1] grow-[1]
            max-[992px]:flex-col">
                <div className="gap-y-[70px] pl-[10px] h-[400px] flex flex-col justify-center
                max-[992px]:h-[300px]
                max-[992px]:gap-y-[30px]">
                    <div>
                        <img className="cursor-pointer mr-[2px] w-[200px] transition-all duration-[0.15s] ease-out active:transform-[scale(95%)]" src={logo} alt={alt} />
                        <p className="font-montserrat text-[0.95em] text-[white]
                        max-[1195px]:w-[400px]
                        max-[992px]:w-auto">{slogan}</p>
                    </div>
                    <div>
                        <h3 className="font-montserrat text-[19px] font-[450] text-white mb-[10px]">{redes}</h3>
                        <a href={href} target={target} rel={rel}>
                            <svg id='insta' xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 16 16" fill="currentColor" className="cursor-pointer text-white transition-all duration-[0.5s] ease-out hover:text-marketing-fonte">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="gap-y-[25px] pr-[10px] flex flex-col 
                max-[992px]:mb-[45px]
                max-[992px]:pl-[11px]">
                    <h3 className="font-montserrat font-[450] text-white text-[19px]">{fraseContato}</h3>
                    <ul className="h-[140px] flex flex-col justify-evenly 
                    max-[992px]:gap-y-[10px]">
                        <li className="text-white cursor-default flex gap-x-[8px] text-[16.5px] font-[450]
                        max-[992px]:font-[400]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24" className="cursor-pointer transition-all duration-[0.5s] ease-in-out"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg>Segunda à Sexta: 9h - 18h 
                        </li>
                        <li className="text-white cursor-pointer flex gap-x-[8px] text-[16.5px] font-[450]
                        max-[992px]:font-[400]">
                            <a href="https://maps.app.goo.gl/NKYXfquvPVCMYMqW7" target="_blank" rel="noopener noreferrer"className="text-white cursor-pointer flex gap-[8px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer transition-all duration-[0.5s] ease-in-out"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg> R. Antônieta Clotilde, 615 - Jardim Iracema, Fortaleza - CE
                            </a>
                        </li>
                        <li className="text-white cursor-pointer flex gap-x-[8px] text-[16.5px] font-[450]
                        max-[992px]:font-[400]">
                            <a href="https://wa.me/558599980363" target="_blank" rel="noopener noreferrer" className="text-white cursor-pointer flex gap-[8px]"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer transition-all duration-[0.5s] ease-in-out"><path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path></svg> (85) 9998-0363
                            </a>
                        </li>
                        <li className="text-white cursor-pointer flex gap-x-[8px] text-[16.5px] font-[450]
                        max-[992px]:font-[400]">
                            <a href="mailto:silvana@promoupmarketing.com.br?subject=Orçamento" rel="noopener noreferrer" className="text-white cursor-pointer flex gap-[8px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer transition-all duration-[0.5s] ease-in-out"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg> silvana@promoupmarketing.com.br
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="bg-header mt-[1px] h-[45px] flex justify-center items-center">
                <p className="font-montserrat font-[400] text-white
                max-[992px]:text-[0.9em]">{direitos}</p>
            </div>
        </>
     );
}
 
export default RedesContato;