import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Mentorship from './components/Mentorship';
import Results from './components/Results';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Mentorship />
        <Results />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
