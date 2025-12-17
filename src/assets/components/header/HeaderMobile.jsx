import React from 'react';
import 'boxicons';
import '../Root.css';

const ReactMobile = ({logoMobile, altMobile, navItemsMobile}) => {
    return(
        <header 
        className="h-[75.5px] pl-[3vw] pr-[3vw] bg-header flex justify-around items-center">
              <h1
                className='hidden'>PromoUP Eventos — Excelência em Live Marketing
              </h1>
            <div>
              <img
                className="w-[175px] h-[53px] pointer-events-none touch-none select-none"
                src={logoMobile}
                alt={altMobile} />
                <i class='bx bx-menu' style='color:#ffffff'  ></i>
            </div>
            <nav 
            className="inline cursor-pointer">
              {navItemsMobile.map((item, index) => (
                <a 
                  key={index}
                  className="font-montserrat font-medium mx-[10px] transition-all duration-500 ease-in-out hover:text-marketing-fonte" 
                  href={item.link}
                >
                  {item.rotulo}
                </a>
              ))}
            </nav>
        </header>
    );
};

export default ReactMobile;