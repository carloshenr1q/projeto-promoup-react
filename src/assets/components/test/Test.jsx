import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './Test.css'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <div class="picture">
                <img class="imagem" src="https://i.imgur.com/6Z9GCHp.png" alt="Ação promocional da campanha 'Fortaleza Liquida' em um shopping center. Quatro promotoras de evento, vestindo camisetas azuis da campanha, posam ao lado do carro Toyota branco que está em exposição como prêmio." loading="lazy"/>
                <p>17/10/2024</p>
            </div>
        </div>
        <div className="embla__slide">
            <div class="picture">
                <img class="imagem" src="https://i.imgur.com/fWksQMR.png" alt="Ação promocional da campanha 'Fortaleza Liquida' em um shopping center. Quatro promotoras de evento, vestindo camisetas azuis da campanha, posam ao lado do carro Toyota branco que está em exposição como prêmio." loading="lazy"/>
                <p>17/10/2024</p>
            </div>
        </div>
        <div className="embla__slide">
            <div class="picture">
                <img class="imagem" src="https://i.imgur.com/tTQ2Qz7.jpeg" alt="Ação promocional da campanha 'Fortaleza Liquida' em um shopping center. Quatro promotoras de evento, vestindo camisetas azuis da campanha, posam ao lado do carro Toyota branco que está em exposição como prêmio." loading="lazy"/>
                <p>17/10/2024</p>
            </div>
        </div>
        <div className="embla__slide">
            <div class="picture">
                <img class="imagem" src="https://i.imgur.com/tTQ2Qz7.jpeg" alt="Ação promocional da campanha 'Fortaleza Liquida' em um shopping center. Quatro promotoras de evento, vestindo camisetas azuis da campanha, posam ao lado do carro Toyota branco que está em exposição como prêmio." loading="lazy"/>
                <p>17/10/2024</p>
            </div>
        </div>
        <div className="embla__slide">
            <div class="picture">
                <img class="imagem" src="https://i.imgur.com/tTQ2Qz7.jpeg" alt="Ação promocional da campanha 'Fortaleza Liquida' em um shopping center. Quatro promotoras de evento, vestindo camisetas azuis da campanha, posam ao lado do carro Toyota branco que está em exposição como prêmio." loading="lazy"/>
                <p>17/10/2024</p>
            </div>
        </div>
        <div className="embla__slide">
            <div class="picture">
                <img class="imagem" src="https://i.imgur.com/tTQ2Qz7.jpeg" alt="Ação promocional da campanha 'Fortaleza Liquida' em um shopping center. Quatro promotoras de evento, vestindo camisetas azuis da campanha, posam ao lado do carro Toyota branco que está em exposição como prêmio." loading="lazy"/>
                <p>17/10/2024</p>
            </div>
        </div>
        <div className="embla__slide">
            <div class="picture">
                <img class="imagem" src="https://i.imgur.com/tTQ2Qz7.jpeg" alt="Ação promocional da campanha 'Fortaleza Liquida' em um shopping center. Quatro promotoras de evento, vestindo camisetas azuis da campanha, posam ao lado do carro Toyota branco que está em exposição como prêmio." loading="lazy"/>
                <p>17/10/2024</p>
            </div>
        </div>
        <div className="embla__slide">
            <div class="picture">
                <img class="imagem" src="https://i.imgur.com/tTQ2Qz7.jpeg" alt="Ação promocional da campanha 'Fortaleza Liquida' em um shopping center. Quatro promotoras de evento, vestindo camisetas azuis da campanha, posam ao lado do carro Toyota branco que está em exposição como prêmio." loading="lazy"/>
                <p>17/10/2024</p>
            </div>
        </div>
        <div className="embla__slide">
            <div class="picture">
                <img class="imagem" src="https://i.imgur.com/tTQ2Qz7.jpeg" alt="Ação promocional da campanha 'Fortaleza Liquida' em um shopping center. Quatro promotoras de evento, vestindo camisetas azuis da campanha, posam ao lado do carro Toyota branco que está em exposição como prêmio." loading="lazy"/>
                <p>17/10/2024</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel;
