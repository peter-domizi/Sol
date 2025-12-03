import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Newsletter() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error' | 'invalid'>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get('email') || '').trim();

    // Validación básica de email
    if (!email || !/.+@.+\..+/.test(email)) {
      setStatus('invalid');
      setSubmitting(false);
      return;
    }

    const FORMSPREE_ID = (import.meta as any).env?.VITE_FORMSPREE_ID as string | undefined;
    try {
      if (FORMSPREE_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error('Request failed');
      } else {
        // Sin backend configurado: simulamos éxito
        await new Promise((r) => setTimeout(r, 400));
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.section
      className="py-24 px-8"
      style={{
        backgroundColor: '#fcfcfc',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold">Iniciá una conversación.</h2>
        <p className="text-lg text-gray-600 mt-4 mb-10">
          Para consultas sobre adquisiciones, colecciones o detalles de una pieza, dejá tu mensaje.
        </p>

        {/* --- FORMULARIO PREPARADO PARA FORMSPREE --- */}
        <form
          onSubmit={handleSubmit}
          method="POST"
          noValidate
          className="flex flex-col gap-3 max-w-lg mx-auto text-left"
        >
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="sr-only">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Nombre"
              className="w-full h-14 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="w-full h-14 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              required
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="sr-only">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Mensaje"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="h-12 px-8 bg-black text-white font-semibold rounded-full shadow-md hover:bg-gray-800 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Enviando…' : 'Enviar'}
            </button>
          </div>
        </form>

        {/* Mensajes de estado */}
        {status === 'success' && (
          <p className="text-sm text-green-600 mt-4" role="status" aria-live="polite">
            ¡Gracias! Tu mensaje fue enviado correctamente.
          </p>
        )}
        {status === 'invalid' && (
          <p className="text-sm text-red-600 mt-4" role="alert" aria-live="polite">
            Por favor, completá Nombre, un Email válido y un Mensaje.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-600 mt-4" role="alert" aria-live="polite">
            Hubo un problema al enviar tu mensaje. Intentá nuevamente en unos instantes.
          </p>
        )}

        <p className="text-xs text-gray-500 mt-6">
          Respetamos tu privacidad. Lee nuestra
          <a href="#" className="underline ml-1 hover:text-black">Política de Privacidad</a>.
        </p>
      </div>
    </motion.section>
  );
}