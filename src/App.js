import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navigation-bar";

function App() {
  return (
    <div>
      <section id="navigation">
        <NavBar />
      </section>
      <section id="home">Home Content</section>
      <section id="about">About Content</section>
      <section id="projects">Projects Content</section>
      <section id="skills">Skills Content</section>
      <section id="experience">Experience Content</section>
      <section id="contanct">Contact Content</section>
    </div>
  );
}

export default App;
