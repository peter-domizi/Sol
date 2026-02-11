import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface TimelineEvent {
  year: string;
  events: string[];
}

const timelineData: TimelineEvent[] = [
  {
    year: '2024',
    events: [
      'Exhibición Colectiva Virtual, Expo Metro, Milan, octubre'
    ]
  },
  {
    year: '2023',
    events: [
      'Exposición Colectiva “Centenario Centro Zamorano”, FEDESPA, CABA, noviembre.',
      '25ª Salón Nacional de Pintura “Jose Angel Nardìn” Avellaneda, Santa Fe.',
      'Exhibición Colectiva Virtual EXPLORA ART EXPO 2023, MAG - Make Art Gallery, marzo/abril.'
    ]
  },
  {
    year: '2022',
    events: [
      'Exposición Colectiva Virtual DINAMICA ART EXPO 2022, MAG – Make Art Gallery, diciembre.',
      'Exposición Colectiva Calise II, Balvanera, CABA en 10º Open House Buenos Aires, noviembre.',
      '24ª Salón Nacional de Pintura “Jose Angel Nardìn” Avellaneda, Santa Fe, septiembre/ octubre.',
      'XVII Salón Anual Provincial de Pintura, Mercedes, Bs. As., junio/julio.',
      'Muestra Colectiva ”Quien es Quien” Galeria Zero 618, Barracas, CABA.'
    ]
  },
  {
    year: '2021',
    events: [
      'Participación Virtual en Mostra d’ Arte Latinoamericana - Premio Arte Anima Latina, Rocca Paolina, Perugia julio/agosto.'
    ]
  },
  {
    year: '2020',
    events: [
      '22ª Salón Nacional de Pintura “Jose Angel Nardìn”, Avellaneda, Santa Fe, noviembre/diciembre.'
    ]
  },
  {
    year: '2019',
    events: [
      'Participación Virtual en ARTBOX.PROJECT MIAMI 2.0, diciembre.',
      '10º Salón de Artes Visuales de La Pampa, Sección Pintura, Museo Provincial de Artes Santa Rosa, noviembre/diciembre.',
      'Mención en el 26º Salón Nacional de Pequeño Formato de Tandil, Mumbat, 19 al 29 de noviembre.',
      'Exposición Calise II, Balvanera, CABA en Open House Buenos Aires 2019, noviembre',
      'Salón Municipal de Artes Plásticas “Luis Gualchi”, Centro Cultural Municipal Cosmopolita, Exaltación de la Cruz, Bs.As., septiembre.',
      'Participación Virtual ARTBOX.PROJECT ZURICH 1.0, Swiss Art Expo, agosto.',
      'Mención Especial en Concurso de Arte Galeria ImaginArte, Barcelona.',
      '21º Salón Nacional de Pintura “Jose Angel Nardìn”, Avellaneda, Santa Fe',
      'XVI Salón Anual Provincial de Pintura "Ciudad de Mercedes", Mercedes, Bs. As., 22 de junio al 14 de julio.',
      'Exposición Colectiva Gallery Days Circuito Palermo, Organizado por Art Gallery en Espacio de Arte Nayart, CABA, 24/25/26/31 de mayo y 1/2 de junio.'
    ]
  },
  {
    year: '2018',
    events: [
      'Mención en LXI Salón Anual de Pintura “Enrique Jose de Larrañaga”, San Andres de Giles, Bs. As., 24 de noviembre al 6 de diciembre.',
      'XL Salón Nacional de Pintura “Fernán Félix de Amador”, Museo Municipal de Bellas Artes, Lujan, Bs. As., 17 de noviembre al 9 de diciembre.',
      'XI Concurso de Pintura UDOCBA, Avellaneda, Bs. As., noviembre.',
      'XII Salón Nacional de Dibujo y Pintura “Profesor Jose Rodrigo”, Museo Municipal José A. Mulazzi, Tres Arroyos, Bs. As., de noviembre 2018 a febrero 2019.',
      'XVII Salón de Pequeño Formato “Yolanda Diaz”, Sala de Artes Visuales de MEDANO, General Pico, La Pampa, octubre/noviembre.',
      'XXXV Salón Azul Nacional de Artes Plásticas, Museo de Arte Lopez Claro, Azul, Bs. As., 26 de octubre al 9 de noviembre.',
      'III Salón de Pequeño Formato Pintura, Dibujo y Grabado ARTVILO, Sala de Arte del Honorable Concejo Deliberante de Vicente López, Olivos, Bs. As., octubre.',
      'Segundo Concurso Abierto de Pintura 55º Aniversario Federada Salud. Rosario, Santa Fe, 5 de octubre al 23 de noviembre.',
      'Salón Municipal de Artes Plásticas “Luis Gualchi”, Centro Cultural Municipal Cosmopolita, Exaltación de la Cruz, Bs.As., 8 al 30 de septiembre.',
      'XXVII Salón de Pintura “Ciudad de General Pico”, Sala de Exposiciones de MEDANO, General Pico, La Pampa, agosto.'
    ]
  },
  {
    year: '2017',
    events: [
      'Exposición Grupal en la Federación de Asociaciones Calabresas en Argentina, CABA, diciembre 2017 a enero 2018.',
      'X Concurso de Pintura UDOCBA, La Plata, Bs. As., noviembre a diciembre.',
      'Salón Pequeño Formato APVA, Villa Adelina, Bs. As., noviembre.',
      '2º Salón de Pequeño Formato ARTVILO 2017, Honorable Concejo Deliberante de Vicente López, Olivos, Bs. As., 17 a 27 de octubre.',
      'Primer Concurso Abierto de Pintura 54º Aniversario Federada Salud, Rosario, Santa Fe, 9 de noviembre al 15 de diciembre.',
      '19º Salón Nacional de Pintura “José Ángel Nardín”, Sala de Exposiciones del Centro Cultural Municipal de Avellaneda, Santa Fe, agosto/septiembre.',
      'Gallery Night - Muestra Colectiva en Galería de Arte Hilda Solano, abril.',
      'Exposición en Galería de Arte Hilda Solano, marzo.'
    ]
  }
];

export default function Timeline() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback((api: any) => {
    setPrevBtnEnabled(api.canScrollPrev());
    setNextBtnEnabled(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 uppercase tracking-widest mb-12 ml-4 md:ml-8 border-b-4 border-gray-900 inline-block pb-2">
          Trayectoria
        </h2>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden px-4 -mx-4" ref={emblaRef}>
          <div className="flex">
            {timelineData.map((item, index) => {
              const isActive = index === selectedIndex;
              return (
                <div
                  key={index}
                  className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-8 relative pb-40"
                  onClick={() => scrollTo(index)}
                >
                  <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'} cursor-pointer h-full`}>
                    {/* Header: Year */}
                    <h3 className={`text-3xl font-bold font-serif mb-6 transition-colors ${isActive ? 'text-[#1e293b]' : 'text-gray-400'}`}>
                      {item.year}
                    </h3>

                    {/* Content Body */}
                    <ul className="space-y-4 pr-6 border-l-2 border-gray-100 pl-4 min-h-[200px]">
                      {item.events.map((event, i) => (
                        <li key={i} className="text-sm md:text-base text-gray-700 leading-relaxed font-sans flex items-start gap-3">
                          <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${isActive ? 'bg-[#1e293b]' : 'bg-gray-300'}`} />
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline Track & Point (Absolute positioning at bottom) */}
                  <div className="absolute bottom-14 left-0 w-full h-24 flex flex-col items-center justify-end pointer-events-none">
                    {/* Vertical connection line from content to circle */}
                    <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 w-px h-[calc(100%-40px)] transition-colors duration-500 ${isActive ? 'bg-gray-300' : 'bg-gray-100'}`} style={{ top: '-1rem' }} />

                    {/* Horizontal Track Line */}
                    <div className="absolute bottom-4 left-0 w-full h-px bg-gray-200" />

                    {/* Year Circle */}
                    <div className={`relative z-10 w-10 h-10 md:ml-8 ${isActive ? 'bg-[#1e293b] scale-110 shadow-lg' : 'bg-white border-2 border-gray-300'
                      } rounded-full flex items-center justify-center transition-all duration-300`}>
                      <span className={`text-xs font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
                        {item.year.slice(2)}
                      </span>
                    </div>

                    {/* Year label below circle */}
                    <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 text-sm font-bold transition-colors duration-300 ${isActive ? 'text-[#1e293b]' : 'text-gray-400'}`}>
                      {item.year}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
