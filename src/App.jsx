import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuShowcase from './components/MenuShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <MenuShowcase />
      <Footer />
    </div>
  );
}

export default App;
