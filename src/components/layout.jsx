import NavBar from "../components/navigation-bar";
import Home from "../components/home";
import About from "../components/about";
import Projects from "../components/projects";
import "../styles/layout.css";

function Layout() {

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
        <Projects />
      </section>
    </div>
  );
}

export default Layout;