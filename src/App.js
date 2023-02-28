import AboutMe from "./components/about/about-me";
import ContactMe from "./components/contact-me/contact-me";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/project";

function App() {
  return (
    <div>
      {/* TODO - make the site responsive */}
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
