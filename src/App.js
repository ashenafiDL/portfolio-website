import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Card from "./components/cards/card";
import AboutMe from "./components/about/about-me";
import Projects from "./components/projects/project";

function App() {
  return (
    <div className="h-screen/10">
      <Header />
      <Hero />

      <hr className="mt-96" />

      <AboutMe />

      <hr />

      <Projects />

      <hr className="m-24" />
    </div>
  );
}

export default App;
