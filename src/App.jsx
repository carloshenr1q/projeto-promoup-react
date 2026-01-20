import { useState } from 'react'
import './App.css'
import './assets/components/Root.css'
import logo from './assets/image/images/logo-promoup-transparente.webp'
import whatsapp from './assets/image/images/botao-whatsapp.png'
import CEOs from './assets/image/images/valores/ceos-promoup.webp'
import Header from './assets/components/header/Header'
import HeaderMobile from './assets/components/header/HeaderMobile'
import Marketing from './assets/components/main/marketing/Marketing'
import Sobre from './assets/components/main/quemsomos/Sobre'
import Valores from './assets/components/main/valores/Valores'
import Servicos from './assets/components/main/NossosServiços/Servicos'
import Clientes from './assets/components/main/clientes/Clientes'
import Depoimentos from './assets/components/main/depoimentos/Depoimentos'
import RedesContato from './assets/components/footer/RedesContato'
import BolhaWhatsapp from './assets/components/bolha/BolhaWhatsapp'


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
      <main className="w-[100%] flex flex-col">
        <Marketing
          subtitulo="EXCELÊNCIA EM LIVE MARKETING"
          link="https://wa.me/558599980363"
          target="_blank"
          rel="noopener noreferrer"
          a="ENTRE EM CONTATO"
        />
        <Sobre
          subtitulo="Quem somos?"
          frase1="Na Promoup 360, acreditamos que marcas não se constroem apenas com produtos ou serviços, mas sim com experiências memoráveis. Por isso, somos especialistas em Live Marketing, criando conexões reais entre empresas e pessoas por meio de ações inovadoras, emocionantes e impactantes."
          frase2="Com uma equipe multidisciplinar e apaixonada pelo que faz, desenvolvemos eventos corporativos, ativações promocionais, experiências digitais, lançamentos de produtos e ações de relacionamento que fortalecem marcas e ampliam seu alcance. Promouo 360 – Excelência em Live Marketing, entregando experiências que marcam"
        />
        <Valores 
          ceosImg={CEOs}
          alt="Os 2 CEOs da PromoUp"
          CEOs="CEOs"
          CEO1="Iure Pinheiro Martins"
          CEO2="Silvana Rocha Mendes"
          missao="Conectar marcas e consumidores por meio de experiências criativas no espaço urbano, promovendo interações autênticas que aproximam pessoas, fortalecem relacionamentos e geram valor para nossos clientes."
          visao="Ser referência nacional em marketing de rua, reconhecimento pela inovação, criatividade e capacidade de transformar cada espaço urbano em um ambiente de experiências memoráveis."
          navValores={[
            {valor:"Dedicação"},
            {valor:"União"},
            {valor:"Ousadia"},
            {valor:"Confiança"},
            {valor:"Humildade"},
          ]}
        />
        <Servicos
          titulo="Nossos Serviços"
        />
        <Clientes
          titulo="Nossos Clientes"
        />
        <Depoimentos
          titulo="Depoimentos"
        />
      </main>
      <footer id="contato" className="bg-footer-fundo flex flex-col justify-center w-[100%] h-[100%] max-h-[750px]">
          <RedesContato
            logo={logo}
            alt="logo da PromoUP"
            slogan="Transformando eventos em experiências inesquecíveis"
            redes="Redes Sociais"
            href="https://www.instagram.com/promoupeventos/"
            target="_blank"
            rel="noopener noreferrer"
            fraseContato="Estamos Aqui para Você"
            direitos="© PromoUP 2026. Todos os Direitos Reservados."
          />
      </footer>
      <BolhaWhatsapp
        orcamento="Solicite seu orçamento aqui." 
        href="https://wa.me/558599980363?text=Olá%2C%20gostaria%20de%20fazer%20o%20orçamento." 
        target="_blank" 
        rel="noopener noreferrer" 
        src={whatsapp}
      />
    </>
  );
};

export default App
