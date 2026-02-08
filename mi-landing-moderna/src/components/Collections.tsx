import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useState, useEffect } from 'react';

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
  const [selected, setSelected] = useState<null | {
    index: number;
    title: string;
    pieces: number;
    images: string[];
  }>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openCollection = (item: { title: string; pieces: number; img: string }, idx: number) => {
    // Build an images array for the collection using available public images.
    // We'll pick `pieces` images by cycling through the existing /imagenes/1.jpg..9.jpg
    const pool = [1,2,3,4,5,6,7,8,9];
    const imgs: string[] = [];
    for (let i = 0; i < item.pieces; i++) {
      const n = pool[(idx + i) % pool.length];
      imgs.push(`/imagenes/${n}.jpg`);
    }
    setSelected({ index: idx, title: item.title, pieces: item.pieces, images: imgs });
    setSelectedImage(0);
  };
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
            <div className="flex gap-8 px-6 md:px-8">
              {collections.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openCollection(item, index)}
                  className="relative flex-[0_0_auto] w-72 md:w-80 lg:w-96 h-96 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
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

        {/* Detalle de colección (modal) */}
        {selected && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 md:px-8"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white w-full max-w-6xl rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left: imágenes */}
              <div className="p-4 flex flex-col gap-4">
                <div className="flex-1">
                  <img
                    src={selected.images[selectedImage]}
                    alt={`${selected.title} - ${selectedImage + 1}`}
                    className="w-full h-96 object-cover rounded-md shadow-md"
                  />
                </div>
                <div className="flex gap-3 overflow-x-auto pt-2">
                  {selected.images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`flex-shrink-0 w-24 h-16 rounded-md overflow-hidden ring-2 ${i === selectedImage ? 'ring-black' : 'ring-transparent'}`}
                    >
                      <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: descripción */}
              <div className="p-6 overflow-auto">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-bold">{selected.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{selected.pieces} piezas</p>
                  </div>
                  <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-black">Cerrar ✕</button>
                </div>

                <hr className="my-4" />

                <h4 className="text-lg font-semibold">Obra: {selectedImage + 1}</h4>
                <p className="text-gray-700 mt-2">
                  Descripción de la obra seleccionada. Aquí podés colocar información sobre técnica, año, medidas y notas curatoriales.
                </p>

                <div className="mt-6">
                  <h5 className="font-semibold">Detalles</h5>
                  <p className="text-sm text-gray-600 mt-2">
                    Más información extendida sobre la serie o la pieza. Esto es un texto de ejemplo que podés reemplazar por contenido real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-gray-500 mt-8 text-sm opacity-80">
          Arrastra o usa las flechas
        </p>
      </div>
    </motion.section>
  );
}