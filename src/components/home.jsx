import profile from "../images/profile-picture.jpeg";

export default function Home() {
  return (
    <div className="homepage">
      <img
        src={profile}
        alt="A profile of me wearing glasses, smiling in front of the Canadian Parliament building in Ottawa."
      ></img>
      <h1>Hi, I'm John Park</h1>
      <p>
        An aspiring Software Engineer passionate about building efficient,
        user-friendly solutions. Experienced in full-stack development with a
        focus on accessible technologies and real-world problem-solving.
      </p>
    </div>
  );
}
