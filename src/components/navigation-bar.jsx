import { useLanguage } from "../languageContext";
import translations from "../data/translations";
import logo from "../images/logo-removebg.png";
import "../styles/navigation-bar.css";

export default function NavBar() {

  const {language, toggleLanguage } = useLanguage();

  return (
    <nav className="navigation-bar">
      <div className="navigation-bar-logo">
        <img src={logo} alt="Logo" ></img>
        <span className="navigation-bar-title">{translations[language].navigation_bar_title}</span>
      </div>
      <div className="navigation-bar-links-container">
        <a className="navigation-bar-links" href="#home">
          {translations[language].home}
        </a>
        <a className="navigation-bar-links" href="#about">
          {translations[language].about}
        </a>
        <a className="navigation-bar-links" href="#projects">
          {translations[language].projects}
        </a>
      </div>

      <button className="navigation-bar-language-button" onClick={toggleLanguage}>
        {language === 'en' ? "Switch to French" : "Passer à l'anglais"}
      </button>
    </nav>
  );
}
