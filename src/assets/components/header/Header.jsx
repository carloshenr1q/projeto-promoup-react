import React from 'react';
import './header.css';
import { v4 as uuidv4 } from "uuid";
import promoup from "../../image/images/logo-promoup-transparente.webp";

const Header = () => {
    return(
        <header className="h-[75px] bg-header flex justify-around items-center">
            <img className="h-[70px] cursor-pointer transition delay-50 duration-150 ease active:scale-90" src={promoup} alt="Logo da Promoup" />
            <nav className="flex gap-5">
                <a className="font-montserrat py-[15px] transition delay-50 duration-500 ease-in-out hover:scale-105" 
                href="">Quem somos?</a>
                <a className="font-montserrat py-[15px] transition delay-50 duration-500 ease-in-out hover:scale-105"
                href="">Nossos serviços</a>
                <a className="font-montserrat py-[15px] transition delay-50 duration-500 ease-in-out hover:scale-105" 
                href="">Clientes</a>
                <a className="font-montserrat py-[15px] transition delay-50 duration-500 ease-in-out hover:scale-105" 
                href="">Contato</a>
            </nav>
        </header>
    );
};

export default function Links() {
  const [links] = useState([
    { id: uuidv4(), nome: "Quem somos?", url: "#" },
    { id: uuidv4(), nome: "Nossos serviços", url: "#" },
    { id: uuidv4(), nome: "Clientes", url: "#" },
    { id: uuidv4(), nome: "Contato", url: "#" }
  ]);

  return (
      links.map(link => (
        <a
        key={link.id}
        id={link.id}
        href={link.url}
        className="font-montserrat py-[15px] transition delay-50 duration-500 ease-in-out hover:scale-105"
        >
            {link.nome}
        </a>
    ))
  );
}

export {Header, Links};