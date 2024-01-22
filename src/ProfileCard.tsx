import "./profileCard.css";
import profile from "./data/profile.json";

const ProfileCard: React.FunctionComponent = () => {
  const { name, title, message_link, connect_link, github_link, bio, skills } = profile;
  const profileImg = new URL("./img/profile/profile.jpg", import.meta.url);
  const messageIcon = new URL("./img/icons/email-48.png", import.meta.url);
  const connectIcon = new URL("./img/icons/linkedin-48.png", import.meta.url);
  const githubIcon = new URL("./img/icons/gh-48.png", import.meta.url);

  return (
    <div className="card-container border-gradient-profile">
      <img
        className="profile-img"
        src={String(profileImg)}
        width={150}
        height={150}
        alt="profile-photo"
      />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <div className="buttons">
        <button
          className="primary"
          onClick={() => {
            let a = document.createElement("a");
            a.href = message_link;
            a.click();
          }}
        >
          <div className="button-inner">
            Message
            <img src={String(messageIcon)} alt="icon" width={24} height={24} />
          </div>
        </button>
        <button
          className="primary"
          onClick={() => {
            window.open(connect_link);
          }}
        >
          <div className="button-inner">
            Connect
            <img src={String(connectIcon)} alt="icon" width={24} height={24} />
          </div>
        </button>
        <button
          className="primary"
          onClick={() => {
            window.open(github_link);
          }}
        >
          <div className="button-inner">
            Github
            <img src={String(githubIcon)} alt="icon" width={24} height={24} />
          </div>
        </button>
      </div>

      <hr />
      {bio.map((b) => (
        <p className="bio" key={b}>
          {b}
        </p>
      ))}
      <hr />
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
