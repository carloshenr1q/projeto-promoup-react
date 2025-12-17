import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import './Header.css';

const Header = ({ logo, alt, navItems }) => {
  return (
    <header className="relative bg-header h-[75px] flex items-center justify-between px-[3vw] lg:justify-around">
      
      {/* Logo */}
      <img 
        src={logo} 
        alt={alt} 
        className="h-[53px] w-auto cursor-pointer max-[992px]:h-[45px]" 
      />

      {/* Versão Desktop */}
      <div className="hidden lg:flex gap-6">
        {navItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="font-montserrat font-medium text-white hover:text-[#E48E16] transition-colors"
          >
            {item.rotulo}
          </a>
        ))}
      </div>

      {/* Menu Mobile */}
      <Popover className="lg:hidden">
        {({ open }) => (
          <>
            <PopoverButton className="block text-white focus:outline-none data-[active]:text-[#E48E16]">
               <svg 
                 xmlns="http://www.w3.org/2000/svg" 
                 width="32" height="32" viewBox="0 0 24 24" 
                 fill="currentColor"
                 className={`transition-transform duration-500 ${open ? 'rotate-90' : ''}`}
               >
                 {open 
                   ? <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/> 
                   : <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/> 
                 }
               </svg>
            </PopoverButton>

            <PopoverPanel
              transition
              anchor="bottom end"
              className="absolute z-50 mt-3 w-screen max-w-sm bg-header p-4 shadow-xl scale-x-[101%]
                         transition duration-500 ease-out 
                         data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  /* MUDANÇA AQUI:
                     Usamos PopoverButton com a prop 'as="a"'.
                     Isso renderiza uma tag <a> no HTML final, mas herda 
                     a lógica de clique do botão (fechar o menu ao clicar).
                  */
                  <PopoverButton
                    as="a" 
                    key={index}
                    href={item.link}
                    className="block text-center rounded-lg px-4 py-2 text-[1.1em] font-[400] text-white hover:bg-white/10 transition-all duration-500 ease-in-out hover:text-marketing-fonte"
                  >
                    {item.rotulo}
                  </PopoverButton>
                ))}
              </div>
            </PopoverPanel>
          </>
        )}
      </Popover>
    </header>
  )
}

export default Header