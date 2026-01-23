# PromoUp Website

## Descrição

Este projeto é a migração do site institucional da PromoUp, anteriormente desenvolvido em HTML, CSS e JavaScript puro, para o framework React utilizando Vite como bundler. A PromoUp é uma empresa especializada em Live Marketing, oferecendo serviços de eventos corporativos, ativações promocionais, experiências digitais e ações de relacionamento que fortalecem marcas e ampliam seu alcance.

O site apresenta uma estrutura moderna e responsiva, com seções dedicadas à apresentação da empresa, seus valores, serviços oferecidos, clientes atendidos, depoimentos e informações de contato.

## Funcionalidades

- **Página Inicial Completa**: Inclui header responsivo (desktop e mobile), seção de marketing, quem somos, valores da empresa, serviços, clientes, depoimentos e footer com redes sociais.
- **Design Responsivo**: Otimizado para dispositivos móveis e desktop utilizando Tailwind CSS.
- **Integração com WhatsApp**: Botão flutuante para contato direto via WhatsApp com link pré-configurado.
- **Carrosséis Interativos**: Utiliza Embla Carousel para exibição de imagens de serviços e depoimentos.
- **Componentização**: Estrutura modular com componentes React reutilizáveis.

## Tecnologias Utilizadas

- **React 19**: Framework JavaScript para construção da interface.
- **Vite**: Bundler rápido para desenvolvimento e build.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **Embla Carousel**: Biblioteca para carrosséis responsivos.
- **Headless UI**: Componentes acessíveis para React.
- **Boxicons**: Biblioteca de ícones.
- **UUID**: Geração de identificadores únicos.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd projeto-promoup-vite
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador em `http://localhost:5173` (ou a porta indicada no terminal).

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento com hot reload.
- `npm run build`: Gera o build otimizado para produção na pasta `dist`.
- `npm run preview`: Visualiza o build de produção localmente.
- `npm run lint`: Executa o linter para verificar qualidade do código.

## Estrutura do Projeto

```
src/
├── App.jsx                 # Componente principal da aplicação
├── main.jsx                # Ponto de entrada da aplicação
├── App.css                 # Estilos globais
├── index.css               # Estilos base
├── assets/
│   ├── components/         # Componentes React
│   │   ├── header/         # Header desktop e mobile
│   │   ├── main/           # Seções principais (marketing, sobre, serviços, etc.)
│   │   ├── footer/         # Footer e redes sociais
│   │   └── bolha/          # Botão flutuante do WhatsApp
│   ├── image/              # Imagens e ícones
│   └── components/Root.css # Estilos raiz
├── data/                   # Arquivos JSON com dados (depoimentos, imagens, tipos de serviço)
└── ...
```

## Licença

Este projeto é propriedade da PromoUP Eventos. Todos os direitos reservados.
