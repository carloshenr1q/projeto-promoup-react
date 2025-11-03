import { useState } from 'react'
import './App.css'
import Header from './assets/components/header/Header'
import logo from './assets/image/images/logo-promoup-transparente.webp'
import Marketing from './assets/components/main/marketing/Marketing'


function App() {
  return (
    <>
      <Header 
        logo={logo}
        alt="logo da PromoUP"
        navItems={[
          {link:"#quem-somos", rotulo:"Quem somos?"},
          {link:"#servicos", rotulo:"Nossos serviços"},
          {link:"#clientes", rotulo:"Clientes"},
          {link:"#contato", rotulo:"Contato"},
        ]}
      />
      <main className='w-[100%] flex flex-col'>
        <Marketing
          h2="EXCELÊNCIA EM LIVE MARKETING"
          link="https://wa.me/558599980363"
          target="_blank"
          rel="noopener noreferrer"
          a="ENTRE EM CONTATO"
        />
      </main>
    </>
  );
};

export default App
