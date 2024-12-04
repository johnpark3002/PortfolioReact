import translations from "../data/translations";
import { useLanguage } from "../languageContext";
import "../styles/about.css";

export default function About() {
  const { language } = useLanguage();

  return (
    <div className="about-container">
      <span className="about-title">{translations[language].about_me_title}</span>
      <p className="about-text1">
        {translations[language].about_me_text1}
      </p>
      <p className="about-text2">
        {translations[language].about_me_text2}
      </p>
      <p className="about-text3">
        {translations[language].about_me_text3}
      </p>
    </div>
  );
}
