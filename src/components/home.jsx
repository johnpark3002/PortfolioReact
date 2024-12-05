import profile from "../images/profile-picture.jpeg";
import Resume from "../assets/john-park-software-engineering-resume.pdf";
import translations from "../data/translations";
import { useLanguage } from "../languageContext";
import "../styles/home.css";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div className="homepage">
      {" "}
      {/* Container div */}
      <div className="homepage-summary">
        <span>
          {translations[language].homepage_summary}{" "}
          <span style={{ fontWeight: 900, color: "#3498db" }}>{translations[language].homepage_summary_name}</span>!
        </span>
        <p>
          {translations[language].homepage_summary_context}
        </p>
        <a
          href={Resume}
          download="john-park-software-engineering-resume.pdf"
          className="homepage-resume-button"
        >
          {translations[language].homepage_summary_resume}
        </a>
      </div>
      <div className="homepage-profile-picture">
        <img
          src={profile}
          alt="A profile of me wearing glasses, smiling in front of the Canadian Parliament building in Ottawa, Ontario, Canada."
        ></img>
      </div>
    </div>
  );
}
