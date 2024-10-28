import logo from "../images/logo.jpeg";

export default function NavBar() {
  return (
    <nav className="navigation-bar">
      <div className="navigation-bar-logo">
        <img src={logo} alt="Logo" width={100} height={100}></img>
      </div>
      <div className="navigation-bar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
