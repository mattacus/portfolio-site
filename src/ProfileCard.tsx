import './profileCard.css';
import profile from './data/profile.json';

const ProfileCard: React.FunctionComponent = () => {
  const { name, title, message_link, connect_link, bio, skills } = profile;
  const profileImg = new URL('./img/profile/profile.jpg', import.meta.url);
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
            let a = document.createElement('a');
            a.href = message_link;
            a.click();
          }}
        >
          Message
        </button>
        <button
          className="primary"
          onClick={() => {
            window.open(connect_link);
          }}
        >
          Connect
        </button>
      </div>
      <hr />
      <p className="bio">{bio}</p>
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
