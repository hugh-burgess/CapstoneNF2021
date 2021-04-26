import { FaPaw } from "react-icons/fa";

export default function Cover() {
  return (
    <a href="./Profile" className="cover-link">
      <div className="cover-page">
        <div className="cover-box-light-blue">
          <h1>
            <span className="cover-title">Walkies&amp;Talkies</span>
          </h1>
        </div>
        <FaPaw className="cover-paw" />
      </div>
    </a>
  );
}
