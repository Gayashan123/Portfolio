
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import HeroSec from "./components/HeroSec";
import NavbarTailwind from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import WorkProcess from "./components/WorkProcess";

function App() {
  return (
    <div>
      <NavbarTailwind />
      <HeroSec />
      <WorkProcess />
      <Portfolio />
      <ContactSection />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
