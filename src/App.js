import { useEffect } from "react";
import "./styles/App.css";
import NavBar from "./components/navigation-bar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  useEffect(() => {
    document.title = "John Park | Software Engineer";
  }, []);

  return (
    <div className="container">
      <section id="navigation">
        <NavBar />
      </section>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        Projects Content
        <Projects />
      </section>
      <section id="skills">
        Skills Content
        <Skills></Skills>
      </section>
      <section id="experience">Experience Content</section>
      <section id="contact">Contact Content</section>
    </div>
  );
}

export default App;
