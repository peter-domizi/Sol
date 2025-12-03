import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2, // Anima los elementos hijos secuencialmente
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="py-24 px-8 bg-gray-50" // Fondo gris claro para diferenciar
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center text-5xl font-serif font-bold mb-16"
          variants={itemVariants}
        >
          BIO
        </motion.h2>

        {/* --- Sección Superior: Texto e Imagen --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
            <p className="mb-4">
              Nacida en Buenos Aires en 1982. Desde temprana edad y durante algunos años
              tomó clases en la "Asociación Estímulo de Bellas Artes" y en el "Taller de Pintura del
              Centro Cultural Recoleta". Siempre manteniéndose apegada a
              actividades dentro de las artes plásticas,
              encontró en la pintura abstracta y
              particularmente en el expresionismo abstracto,
              su gran pasión.
            </p>
            <p>
              Desde el 2016, es alumna del Taller de Arte
              Abstracto del Maestro Marco Otero.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <img
              src="/imagenes/retrato.jpg"
              alt="Sol Baranda con su obra"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* --- Sección Inferior: Reseña de Marco Otero --- */}
        <motion.div variants={itemVariants} className="text-lg leading-relaxed text-gray-700">
          <p className="mb-4 text-2xl font-semibold">Titulo por definir</p>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p className="text-right text-base text-gray-500">
            Buenos Aires, Argentina.
          </p>
        </motion.div>

        {/* --- Sección de Redes Sociales (SIGUEME) --- */}
        <motion.div variants={itemVariants} className="mt-20 flex items-center gap-4 text-gray-600">
          <span className="text-xl font-semibold">Redes:</span>
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
    </motion.section>
  );
}