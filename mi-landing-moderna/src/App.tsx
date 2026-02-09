import Hero from './components/Hero';
import About from './components/About'; // <-- IMPORTA EL NUEVO COMPONENTE
import Collections from './components/Collections';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Collections />
      <About />
      <Newsletter />
      {/* Podrías agregar un <Footer /> aquí */}
    </main>
  );
}

export default App;