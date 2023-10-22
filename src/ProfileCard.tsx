import "./profileCard.css";
import profile from "./data/profile.json";

const ProfileCard: React.FunctionComponent = () => {
  const { name, title, message_link, connect_link, skills } = profile;
  const profileImg = new URL("./img/profile/profile.jpg", import.meta.url);
  return (
    <div className="card-container">
      <img
        className="round"
        src={String(profileImg)}
        width={150}
        height={150}
        alt="profile-photo"
      />
      <h3>{name}</h3>
      <p>{title}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary ghost">Connect</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
