import { useLanguage } from "../languageContext";
import translations from "../data/translations";
import logo from "../images/logo-removebg.png";
import "../styles/navigation-bar.css";
import React, { useState, useEffect, useCallback } from "react";

export default function NavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, toggleLanguage } = useLanguage();

  const handleScroll = useCallback(() => {
    setShowNavbar(window.scrollY < lastScrollY);
    setLastScrollY(window.scrollY);
  }, [lastScrollY]); // Add `lastScrollY` as a dependency

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Add `handleScroll` as a dependency

  return (
    <nav className={`navigation-bar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="navigation-bar-logo">
        <img src={logo} alt="Logo"></img>
        <span className="navigation-bar-title">
          {translations[language].navigation_bar_title}
        </span>
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

      <button
        className="navigation-bar-language-button"
        onClick={toggleLanguage}
      >
        {language === "en" ? "Switch to French" : "Passer à l'anglais"}
      </button>
    </nav>
  );
}
