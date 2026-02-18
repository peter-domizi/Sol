import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useState, useEffect } from 'react';

// Colecciones de Sol Baranda (rutas adaptadas a imágenes disponibles)
const collections = [
  {
    title: 'ALTIBAJOS',
    images: [
      '/imagenes/ALTIBAJOS 2.jpg',
      '/imagenes/ALTIBAJOS 1_SOL BARANDA.jpg',
      '/imagenes/Altibajos 3-4926.jpg',
      '/imagenes/Altibajos 4-4929.jpg',
      '/imagenes/Altibajos 9-4873.jpg',
    ],
  },
  {
    title: 'BUSILIS',
    images: [
      '/imagenes/Busilis 3-4892.jpg',
      '/imagenes/Busilis 4-A-4887.jpg',
      '/imagenes/Busilis 4-B-4883.jpg',
      '/imagenes/Busilis 5-4878.jpg',
      '/imagenes/Busilis 6 4956.jpg',
      '/imagenes/Busilis 7-4880.jpg',
      '/imagenes/Busilis 8-4941.jpg',
    ],
  },
  {
    title: 'CALMA',
    images: [
      '/imagenes/CALMA 5 - Sol Baranda.jpg',
      '/imagenes/Calma 1.jpg',
      '/imagenes/Calma 2-4859.jpg',
      '/imagenes/Calma 4959.jpg',
    ],
  },
  {
    title: 'ÍMPETU',
    images: [
      '/imagenes/Impetu 1-4975.jpg',
      '/imagenes/Impetu 2-4968.jpg',
    ],
  },
  {
    title: 'LATENTE',
    images: [
      '/imagenes/Latente 2-4903.jpg',
      '/imagenes/Latente 2-4970.jpg',
      '/imagenes/Latente 4-5027.jpg',
    ],
  },
  {
    title: 'SUBLIME',
    images: [
      '/imagenes/SUBLIME 1 - SOL BARANDA.jpg',
      '/imagenes/SUBLIME 3 - BARANDA MARIA SOL.jpg',
      '/imagenes/SUBLIME 5 _ SOL BARANDA.jpg',
    ],
  },
  {
    title: 'SEGUNDAS OPORTUNIDADES',
    images: [
      '/imagenes/SEGUNDAS OPORTUNIDADES.jpeg',
      '/imagenes/Segundas Oportunidades 2_Baranda.jpg',
    ],
  },
  {
    title: 'OTROS',
    images: [
      '/imagenes/_1104.jpg',
      '/imagenes/_9856.jpg',
      '/imagenes/_9863.jpg',
      '/imagenes/_9866.jpg',
      '/imagenes/_9868.jpg',
      '/imagenes/base.jpg',
    ],
  },
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

  const openCollection = (item: { title: string; images: string[] }, idx: number) => {
    // Abrimos la colección usando el array `images` definido arriba.
    const imgs = item.images || [];
    setSelected({ index: idx, title: item.title, pieces: imgs.length, images: imgs });
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
      className="w-full bg-white py-8 md:py-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full px-6 md:px-10">
        <h2 className="text-center text-5xl md:text-7xl font-serif font-bold mb-6">
          Colecciones
        </h2>
        <p className="text-center text-xl md:text-2xl text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
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
                  className="relative flex-[0_0_auto] w-80 md:w-[28rem] lg:w-[34rem] h-[36rem] rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={item.images?.[0] || '/imagenes/base.jpg'}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-40" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold uppercase tracking-wide leading-none">
                      {item.title}
                    </h3>
                    <p className="text-lg font-medium opacity-90 mt-2">{item.images?.length || 0} piezas</p>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 md:px-8 py-8"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white w-[95vw] h-[95vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button (Absolute) */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-black/5 rounded-full transition-colors duration-300 backdrop-blur-sm group"
              >
                <svg className="w-6 h-6 text-gray-800 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              {/* Left: Imágenes (Mayor protagonismo) */}
              <div className="w-full md:w-[60%] bg-gray-50 p-8 md:p-12 flex flex-col justify-center relative">
                <div className="flex-1 flex items-center justify-center w-full h-full relative">
                  <img
                    src={selected.images[selectedImage]}
                    alt={`${selected.title} - ${selectedImage + 1}`}
                    className="max-w-full max-h-[75vh] object-contain shadow-xl rounded-sm"
                  />
                </div>

                {/* Thumbnails (flotantes o abajo) */}
                <div className="mt-8 flex gap-4 overflow-x-auto pb-2 justify-center">
                  {selected.images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${i === selectedImage
                        ? 'ring-2 ring-black ring-offset-2 scale-105 opacity-100'
                        : 'opacity-60 hover:opacity-100'
                        }`}
                    >
                      <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Descripción (Estilo Editorial) */}
              <div className="w-full md:w-[40%] p-10 md:p-16 flex flex-col justify-center bg-white overflow-y-auto">
                <div>
                  <p className="text-gray-400 text-lg uppercase tracking-widest font-medium mb-3">Colección</p>
                  <h3 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-[0.9] mb-4">
                    {selected.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-8 max-w-max">
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                    {selected.pieces} obras disponibles
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-serif font-bold mb-3 border-l-4 border-black pl-4">Sobre la obra</h4>
                    <p className="text-lg text-gray-600 leading-relaxed pl-5">
                      Esta pieza forma parte de la serie <span className="font-semibold text-gray-900">{selected.title}</span>.
                      Una exploración visual que invita a la contemplación a través de formas abstractas y texturas profundas.
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-12">
                  <button
                    onClick={() => {
                      setSelected(null);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-lg font-medium underline underline-offset-4 decoration-1 decoration-gray-400 hover:decoration-black transition-all"
                  >
                    Consultar por esta obra
                  </button>
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