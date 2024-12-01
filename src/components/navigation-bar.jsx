import logo from "../images/logo-removebg.png";
import "../styles/navigation-bar.css";

export default function NavBar() {
  return (
    <nav className="navigation-bar">
      <div className="navigation-bar-logo">
        <img src={logo} alt="Logo" ></img>
        <span className="navigation-bar-title">John Park | Software Engineer</span>
      </div>
      <div className="navigation-bar-links-container">
        <a className="navigation-bar-links" href="#home">
          Home
        </a>
        <a className="navigation-bar-links" href="#about">
          About
        </a>
        <a className="navigation-bar-links" href="#projects">
          Projects
        </a>
      </div>
    </nav>
  );
}
