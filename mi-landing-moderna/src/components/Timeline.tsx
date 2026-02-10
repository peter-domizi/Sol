import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2017',
    title: 'Actividad Expositiva',
    description: 'Exposición Grupal en la Federación de Asociaciones Calabresas en Argentina. X Concurso de Pintura UDOCBA. Salón Pequeño Formato APVA. 2º Salón de Pequeño Formato ARTVILO. Primer Concurso Abierto de Pintura 54º Aniversario Federada Salud. 19º Salón Nacional de Pintura "José Ángel Nardín". Gallery Night y Exposición en Galería de Arte Hilda Solano.',
  },
  {
    year: '2018',
    title: 'Reconocimiento Múltiple',
    description: 'Mención en LXI Salón Anual de Pintura. XL Salón Nacional de Pintura. XI Concurso de Pintura UDOCBA. XII Salón Nacional de Dibujo y Pintura. XVII Salón de Pequeño Formato. XXXV Salón Azul Nacional de Artes Plásticas. III Salón de Pequeño Formato Pintura, Dibujo y Grabado ARTVILO. Segundo Concurso Abierto de Pintura 55º Aniversario Federada Salud. XXVII Salón de Pintura Ciudad de General Pico.',
  },
  {
    year: '2019',
    title: 'Participación Internacional',
    description: 'Participación Virtual en ARTBOX.PROJECT MIAMI 2.0. 10º Salón de Artes Visuales de La Pampa. Mención en el 26º Salón Nacional de Pequeño Formato de Tandil. Exposición Calise II Open House Buenos Aires. Salón Municipal de Artes Plásticas. Participación Virtual ARTBOX.PROJECT ZURICH 1.0. Mención Especial en Concurso de Arte Galeria ImaginArte Barcelona. 21º Salón Nacional de Pintura. XVI Salón Anual Provincial de Pintura. Exposición Colectiva Gallery Days Circuito Palermo.',
  },
  {
    year: '2020',
    title: 'Continuidad Artística',
    description: '22ª Salón Nacional de Pintura "Jose Angel Nardín", Avellaneda, Santa Fe, noviembre/diciembre.',
  },
  {
    year: '2021',
    title: 'Mostra Latinoamericana',
    description: 'Participación Virtual en Mostra d\'Arte Latinoamericana - Premio Arte Anima Latina, Rocca Paolina, Perugia julio/agosto.',
  },
  {
    year: '2022',
    title: 'Múltiples Exposiciones',
    description: 'Exposición Colectiva Virtual DINAMICA ART EXPO 2022 Make Art Gallery. Exposición Colectiva Calise II Open House Buenos Aires. 24ª Salón Nacional de Pintura José Angel Nardín. XVII Salón Anual Provincial de Pintura Mercedes. Muestra Colectiva "Quien es Quien" Galeria Zero 618.',
  },
  {
    year: '2023',
    title: 'Trayectoria Consolidada',
    description: 'Exposición Colectiva "Centenario Centro Zamorano" FEDESPA CABA. 25ª Salón Nacional de Pintura José Angel Nardín Avellaneda, Santa Fe. Exhibición Colectiva Virtual EXPLORA ART EXPO 2023 Make Art Gallery.',
  },
  {
    year: '2024',
    title: 'Presencia Virtual Global',
    description: 'Exhibición Colectiva Virtual, Expo Metro, Milan, octubre.',
  },
];

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < timelineEvents.length - 1 ? prev + 1 : prev));
  };

  return (
    <motion.section
      className="py-32 px-8 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            TRAYECTORIA
          </h2>
          <motion.div
            className="w-24 h-1 bg-gray-900"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>

        {/* Timeline con línea fija */}
        <div className="relative py-12">
          {/* Línea horizontal de fondo */}
          <div className="absolute left-0 right-0 top-8 h-1 bg-gradient-to-r from-gray-300 via-gray-900 to-gray-300 z-0"></div>

          {/* Container de años fijos */}
          <div className="relative z-10 mb-16">
            <div className="flex justify-between items-center px-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setSelectedIndex(index)}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Punto */}
                  <motion.div
                    className={`w-5 h-5 rounded-full border-4 mb-3 transition-all ${
                      selectedIndex === index
                        ? 'bg-gray-900 border-gray-900 shadow-lg scale-125'
                        : 'bg-white border-gray-900 hover:scale-110'
                    }`}
                    whileHover={{ scale: 1.3 }}
                  ></motion.div>

                  {/* Año */}
                  <motion.span
                    className={`text-xl font-serif font-bold transition-colors ${
                      selectedIndex === index ? 'text-gray-900' : 'text-gray-600'
                    }`}
                    animate={{
                      color: selectedIndex === index ? '#111827' : '#4b5563',
                    }}
                  >
                    {event.year}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contenido del año seleccionado */}
          <div className="relative mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-2xl mx-auto"
              >
                <h4 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                  {timelineEvents[selectedIndex].title}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  {timelineEvents[selectedIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Botones de navegación */}
            <div className="flex justify-center gap-8 mt-12">
              <motion.button
                onClick={handlePrev}
                disabled={selectedIndex === 0}
                className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                whileHover={{ scale: selectedIndex > 0 ? 1.1 : 1 }}
                whileTap={{ scale: selectedIndex > 0 ? 0.95 : 1 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={handleNext}
                disabled={selectedIndex === timelineEvents.length - 1}
                className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                whileHover={{ scale: selectedIndex < timelineEvents.length - 1 ? 1.1 : 1 }}
                whileTap={{ scale: selectedIndex < timelineEvents.length - 1 ? 0.95 : 1 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
