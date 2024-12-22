import profile from "../images/profile-picture.jpeg";
import translations from "../data/translations";
import { useLanguage } from "../languageContext";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/resume");
  };

  return (
    <div className="homepage">
      {" "}
      {/* Container div */}
      <div className="homepage-summary">
        <span>
          {translations[language].homepage_summary}{" "}
          <span style={{ fontWeight: 900, color: "#3498db" }}>{translations[language].homepage_summary_name}</span>!
        </span>
        {/* <TypewriterText
          text={`${translations[language].homepage_summary} \n ${translations[language].homepage_summary_name}`}
          className="my-custom-class"
        ></TypewriterText> */}

        <p>{translations[language].homepage_summary_context}</p>
        <button
          onClick={handleRedirect}
          className="homepage-resume-button"
        >
          {translations[language].homepage_summary_resume}
        </button>
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
