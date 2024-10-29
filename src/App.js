import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/navigation-bar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  useEffect(() => {
    document.title = "John Park | Software Engineer";
  }, []);

  return (
    <div>
      <section id="navigation">
        <NavBar />
      </section>
      <section id="home">
        Home Content
        <Home />
      </section>
      <section id="about">
        About Content
        <About />
      </section>
      <section id="projects">
        Projects Content
        <Projects />
      </section>
      <section id="skills">Skills Content</section>
      <section id="experience">Experience Content</section>
      <section id="contact">Contact Content</section>
    </div>
  );
}

export default App;
