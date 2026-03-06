import WorkExperience from "./components/WorkExperience";
import FeaturedProjects from "./components/FeaturedProjects";
import SynthEraHero from "./components/hero/SynthEraHero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="app-container">
      <SynthEraHero />
      <AboutMe />
      <WorkExperience />
      <FeaturedProjects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
