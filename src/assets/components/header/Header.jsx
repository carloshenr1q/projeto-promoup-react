import { useState, useEffect } from 'react'
import { Popover, PopoverButton, PopoverPanel, PopoverBackdrop } from '@headlessui/react'

const Header = ({ logo, alt, navItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 z-50 w-full flex items-center justify-between px-[5vw] lg:justify-around bg-[#1f0836] bg-gradient-to-r from-[#1f0836] via-[#2F0F4E] to-[#3d1266] transition-[height,box-shadow] duration-300 ease-out ${
        isScrolled
          ? 'h-[64px] shadow-[0_8px_28px_rgba(0,0,0,0.55)]'
          : 'h-[75px] shadow-none'
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center focus:outline-none">
        <img 
          src={logo} 
          alt={alt} 
          className={`w-auto cursor-pointer select-none transition-[height] duration-300 ease-out ${
            isScrolled ? 'h-[46px] max-[992px]:h-[40px]' : 'h-[53px] max-[992px]:h-[45px]'
          }`} 
        />
      </a>

      {/* Versão Desktop */}
      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="relative font-montserrat font-medium text-white hover:text-[#E48E16] transition-colors duration-300 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E48E16] after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.rotulo}
          </a>
        ))}
      </nav>

      {/* Menu Mobile Profissional */}
      <Popover className="lg:hidden">
        {({ open }) => (
          <>
            <PopoverButton
              aria-label="Abrir menu de navegação"
              className={`flex items-center justify-center w-10 h-10 rounded-xl border transition-all duration-300 focus:outline-none active:scale-95 cursor-pointer ${
                open
                  ? 'bg-[#E48E16]/15 border-[#E48E16]/50 text-[#E48E16]'
                  : 'bg-white/[0.06] border-white/10 text-white hover:bg-white/10'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="26" height="26" viewBox="0 0 24 24" 
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
              >
                {open ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="10" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </PopoverButton>

            {/* Backdrop escurecido com desfoque */}
            <PopoverBackdrop
              transition
              className="fixed inset-x-0 bottom-0 top-[64px] z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-out data-[closed]:opacity-0"
            />

            {/* Painel estilo Drawer de Topo */}
            <PopoverPanel
              transition
              className="absolute top-full left-0 right-0 z-50 w-full bg-[#1a062d] bg-gradient-to-b from-[#2A0D47] via-[#1F0836] to-[#140423] px-6 pt-3 pb-6 rounded-b-3xl shadow-[0_20px_45px_rgba(0,0,0,0.75)] border-t border-white/[0.06] border-b border-[#E48E16]/25
                         transition-[transform,opacity] duration-300 ease-out origin-top
                         data-[closed]:-translate-y-2 data-[closed]:scale-y-95 data-[closed]:opacity-0"
            >
              <nav className="flex flex-col max-w-md mx-auto divide-y divide-white/[0.06]">
                {navItems.map((item, index) => (
                  <PopoverButton
                    as="a" 
                    key={index}
                    href={item.link}
                    className="group flex items-center justify-between py-3.5 px-3 font-montserrat text-[1.05rem] font-[500] text-white/95 hover:text-[#E48E16] active:bg-white/[0.05] rounded-lg transition-all duration-200"
                  >
                    <span className="tracking-wide">{item.rotulo}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-white/35 group-hover:text-[#E48E16] group-hover:translate-x-1 transition-all duration-200"
                    >
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </PopoverButton>
                ))}
              </nav>

              {/* CTA Rápido de Orçamento no Menu Mobile */}
              <div className="max-w-md mx-auto mt-4 pt-2">
                <PopoverButton
                  as="a"
                  href="https://wa.me/558599980363?text=Olá%2C%20gostaria%20de%20fazer%20o%20orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#E48E16] to-[#c9790d] text-[#1a062d] font-montserrat font-[700] text-[0.95rem] uppercase tracking-wider shadow-[0_6px_20px_rgba(228,142,22,0.3)] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Solicitar Orçamento</span>
                </PopoverButton>
              </div>
            </PopoverPanel>
          </>
        )}
      </Popover>
    </header>
  )
}

export default Header