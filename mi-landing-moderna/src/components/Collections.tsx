import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

// Datos de ejemplo
const collections = [
  { title: 'SERIES 01', pieces: 8, img: '/imagenes/1.jpg' },
  { title: 'SERIES 02', pieces: 6, img: '/imagenes/2.jpg' },
  { title: 'SERIES 03', pieces: 4, img: '/imagenes/3.jpg' },
  { title: 'SERIES 04', pieces: 5, img: '/imagenes/4.jpg' },
  { title: 'SERIES 05', pieces: 7, img: '/imagenes/5.jpg' },
  { title: 'SERIES 06', pieces: 3, img: '/imagenes/6.jpg' },
  { title: 'SERIES 07', pieces: 9, img: '/imagenes/7.jpg' },
  { title: 'SERIES 08', pieces: 2, img: '/imagenes/8.jpg' },
  { title: 'SERIES 09', pieces: 6, img: '/imagenes/9.jpg' },
];

export default function Collections() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      dragFree: false,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <motion.section
      className="h-screen w-screen bg-white flex items-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full px-6 md:px-10">
        <h2 className="text-center text-5xl font-serif font-bold">
          Colecciones
        </h2>
        <p className="text-center text-lg text-gray-600 mt-4 max-w-xl mx-auto">
          Explora las colecciones seleccionadas, cada una contando una
          historia única.
        </p>

        {/* Embla Carousel viewport */}
        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {collections.map((item, index) => (
                <div
                  key={index}
                  className="relative flex-[0_0_auto] w-72 md:w-80 lg:w-96 h-96 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-40" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-90">{item.pieces} pieces</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next buttons */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-4">
            <button
              aria-label="Previous"
              onClick={scrollPrev}
              className="pointer-events-auto rounded-full bg-white/80 hover:bg-white shadow-md ring-1 ring-black/10 w-10 h-10 flex items-center justify-center"
            >
              <span className="sr-only">Previous</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              aria-label="Next"
              onClick={scrollNext}
              className="pointer-events-auto rounded-full bg-white/80 hover:bg-white shadow-md ring-1 ring-black/10 w-10 h-10 flex items-center justify-center"
            >
              <span className="sr-only">Next</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm opacity-80">
          Arrastra o usa las flechas
        </p>
      </div>
    </motion.section>
  );
}