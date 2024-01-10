import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/projects/Project";

export default function App() {
  return (
    <div className="text-slate-800">
      <div className="h-screen">
        <div className="bg-gradient-to-br from-primary to-secondary px-80">
          <Header />
          <Hero />
        </div>
      </div>
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
