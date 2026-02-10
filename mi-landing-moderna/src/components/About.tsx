import { motion } from 'framer-motion';

export default function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center text-4xl md:text-5xl font-serif font-bold mb-16"
          variants={itemVariants}
        >
          BIO
        </motion.h2>

        {/* --- Sección Superior: Texto e Imagen --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div variants={itemVariants} className="text-base leading-relaxed text-gray-700">
            <h3 className="text-2xl font-serif font-bold mb-6">Sol Baranda</h3>
            
            <p className="mb-4">
              Nacida en Buenos Aires en 1982.
            </p>
            
            <p className="mb-4">
              Se inició desde temprana edad en la actividad plástica en Asociación Estimulo de Bellas Artes y tiempo después en el "Taller de Pintura del Centro Cultural Recoleta".
            </p>
            
            <p className="mb-4">
              Se recibió de Licenciada en Relaciones Internacionales.
            </p>
            
            <p className="mb-4">
              Apasionada por el arte abstracto, en particular del expresionismo abstracto, del 2016 al 2019, fue alumna del Taller de Arte Abstracto del Maestro Marco Otero.
            </p>
            
            <p className="mb-6">
              Desde 2023 hasta febrero 2025 fue alumna del Taller de Andres Waismann.
            </p>

            <h4 className="text-lg font-serif font-bold mb-4">Distinciones</h4>
            <ul className="space-y-2 text-sm list-disc list-inside pl-4 text-gray-700">
              <li>Diploma de Merito Artistico - PREMIO ARTE CRITICA, MAG, diciembre 2022.</li>
              <li>Mención en el 26º Salon Nacional de Pequeño Formato de Tandil, Mumbat, 19 al 29 de noviembre 2019.</li>
              <li>Mención Especial en Concurso de Arte Galeria ImaginArte, Barcelona, 2019.</li>
              <li>Mención en LXI Salón Anual de Pintura "Enrique Jose de Larrañaga", San Andres de Giles, Bs. As., 24 de noviembre al 6 de diciembre de 2018.</li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <img
              src="/imagenes/Retratos/retrato.jpg"
              alt="Sol Baranda con su obra"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* --- Sección Inferior: Reseña de Marco Otero --- */}
        <motion.div variants={itemVariants} className="text-base leading-relaxed text-gray-700">
          <p className="mb-4 text-xl font-semibold">Sol Baranda, por Marco Otero</p>
          <p className="mb-4">
            Cuando debo realizar un texto sobre las características de una artista en este caso de una discípula, me enfrento al problema de no mezclar el afecto con la crítica específica de su obra. Esto me resulta más difícil aún. Su obra contiene todos los elementos que caracterizan al Expresionismo Abstracto en forma severa y sin concesiones, pero con un lenguaje que ha logrado tener características propias que permiten al ver su obra, conocer al autor sin ver la firma, cosa nada fácil de lograr.
          </p>
          <p className="mb-4">
            Las urgencias de sus diagonales, sin referencia alguna a geometrías reconocidas, sus colores son de riesgo, lejos de las cómodas armonías de La Academia, sin embargo cubrir planos no reconocibles, ni claudicando ante lo decorativo, define como una pintora que asume riesgos sin restricciones a su creatividad tratando de seducir al espectador. En cada obra asume todos los riesgos...los cobardes mueren varias veces, los valientes solo una.
          </p>
          <p className="mb-4">
            No me cabe duda, que los tiempos me darán la razón acerca de la calidad y trascendencia de las obras de Sol Baranda.
          </p>
          <p className="text-right text-base text-gray-500">
            Marco Otero, mayo 2017, Buenos Aires, Argentina.
          </p>
        </motion.div>

        {/* --- Sección de Redes Sociales (SIGUEME) --- */}
        <motion.div variants={itemVariants} className="mt-20 flex items-center gap-4 text-gray-600">
          <span className="text-base font-semibold">Redes:</span>
          <a href="#" className="hover:text-black transition-colors">
            <svg /* Icono de Facebook */
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.248 0-1.628.772-1.628 1.563V12h2.773l-.443 2.89h-2.33V22C17.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="hover:text-black transition-colors">
            <svg /* Icono de Instagram */
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.336 4.86a2.128 2.128 0 00-1.488-.506c-.456-.076-.924-.09-1.393-.09-.47 0-.938.014-1.393.09a2.128 2.128 0 00-1.488.506c-.476.353-.872.825-1.125 1.39a2.128 2.128 0 00-.506 1.488c-.076.456-.09.924-.09 1.393 0 .47.014.938.09 1.393a2.128 2.128 0 00.506 1.488c.353.476.825.872 1.39 1.125a2.128 2.128 0 001.488.506c.456.076.924.09 1.393.09.47 0 .938-.014 1.393-.09a2.128 2.128 0 001.488-.506c.476-.353.872-.825 1.125-1.39a2.128 2.128 0 00.506-1.488c.076-.456.09-.924.09-1.393 0-.47-.014-.938-.09-1.393a2.128 2.128 0 00-.506-1.488c-.353-.476-.825-.872-1.39-1.125zM12 17.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11zM17.5 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}