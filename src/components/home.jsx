import profile from "../images/profile-picture.jpeg";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="homepage"> {/* Container div */}
      <div className="homepage-summary">
        <span>
          Hi, my name is <span style={{fontWeight: 900, color: "#3498db"}}>John</span>.
        </span>
        <p>
          An aspiring Software Engineer passionate about building efficient,
          user-friendly solutions. Experienced in full-stack development with a
          focus on accessible technologies and real-world problem-solving.
        </p>
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
