import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center">
      {/* --- Imagen de Fondo --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imagenes/base.jpg"
          alt="Cuadro base"
          className="w-full h-full object-cover brightness-[0.5]"
        />
      </div>

      {/* --- Contenido de Texto --- */}
      <div className="relative z-10 w-full mx-auto px-4 md:px-8 text-center">
        <motion.h1
          className="text-white text-[10rem] md:text-[14rem] lg:text-[18rem] font-serif font-bold max-w-full tracking-tighter leading-[0.85]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Sol Baranda
        </motion.h1>
      </div>
    </section>
  );
}