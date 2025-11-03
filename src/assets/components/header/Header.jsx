import React from 'react';
import '../Root.css';
import { v4 as uuidv4 } from "uuid";
const Header = ({logo, alt, navItems}) => {
    return(
        <header 
        className="h-[75px] pl-[3vw] pr-[3vw] bg-header flex justify-around items-center">
            <h1 
              className='hidden'>PromoUP Eventos — Excelência em Live Marketing
            </h1>
            <img 
              className="w-[175px] h-[53px] cursor-pointer" 
              src={logo} 
              alt={alt} />
            <nav 
            className="inline cursor-pointer">
              {navItems.map((item, index) => (
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


export default Header;