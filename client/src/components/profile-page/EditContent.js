import { FaDog } from "react-icons/fa";
import { FaBone } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { MdAddAPhoto } from "react-icons/md";
import bubble from "../../images/stat-bubble.svg";
import bioBubble from "../../images/bio-bubble.svg";
import "./EditProfile.css";
import { useEffect, useState } from "react";
import {
  addProfileToLocalStorage,
  getItemsFromLocalStorage,
} from "../../utils/itemStorage";
import { Image } from "cloudinary-react";
import { useHistory } from "react-router";
const baseUrl = "https://shielded-tundra-69796.herokuapp.com/users";

export default function EditContent() {
  let history = useHistory();
  const [picture, setPicture] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [bioClick, setBioClick] = useState(false);
  const [isPhotoClicked, setIsPhotoClicked] = useState(false);
  const [isLoadClicked, setIsLoadClicked] = useState(false);
  const [imageId, setImageId] = useState("");
  const [imageSelected, setImageSelected] = useState("");
  const [imageType, setImageType] = useState("");
  const [imagePublicId, setImagePublicId] = useState("");
  const [info, setInfo] = useState({});
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(125);
  useEffect(() => {
    const user = getItemsFromLocalStorage("user");
    setPicture(user.info.url);
    setBio(user.bio);
    setName(user.name);
    setInfo(user.info);
    setImageType(user.imageType);
  }, []);

  const uploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "s2bkhsfz");

    fetch("https://api.cloudinary.com/v1_1/dy1xpaosj/image/upload", {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setImagePublicId(result.public_id);
        setImageType(result.format);
        setImageId(result.created_at);
        setInfo(result);
        setIsLoadClicked(!isLoadClicked);

        if (result.error.message === "Missing required parameter - file") {
          alert("Please select a picture to upload.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  function handleEditSubmit(e) {
    const profile = { bio, imageType, info, name };
    e.preventDefault();

    if (
      bioClick === false &&
      isPhotoClicked === false &&
      isLoadClicked === false
    ) {
      alert("nothing to save!");
    } else {
      addProfileToLocalStorage("user", profile);
      setIsClicked(!isClicked);
    }
    const initDetails = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      mode: "cors",
      body: JSON.stringify({
        name: name,
        bio: bio,
        imageType: imageType,
        info: info,
        picture: `https://res.cloudinary.com/dy1xpaosj/image/upload/v1620380186/${imagePublicId}.${imageType}`,
      }),
    };
    fetch(baseUrl, initDetails)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleEditBioChange(e) {
    const newBio = e.target.value;
    setBio(newBio);
    const { value } = e.target;
    setWordCount(125 - value.length);
    setText(value);
  }

  function pencilClick(e) {
    e.preventDefault();
    setBioClick(!bioClick);
  }

  return (
    <form onSubmit={handleEditSubmit}>
      <div className="grid-wrapper">
        <div className="top-profile-wrapper">
          {!isLoadClicked ? (
            <img
              className="profile-picture blur-effect"
              src={picture}
              alt="doggy"
            />
          ) : (
            <Image
              className="profile-picture blur-effect"
              id={imageId}
              cloudName="dy1xpaosj"
              publicId={
                imageId
                  ? `https://res.cloudinary.com/dy1xpaosj/image/upload/v1620380186/${imagePublicId}.${imageType}`
                  : ""
              }
            />
          )}
          {!isPhotoClicked ? (
            <label className="edit-photo">
              <MdAddAPhoto />
              <input
                className="hidden"
                type="file"
                name="upload"
                id="upload"
                onChange={(event) => {
                  setIsPhotoClicked(!isPhotoClicked);
                  setImageSelected(event.target.files[0]);
                }}
                required
              />
            </label>
          ) : (
            <button
              className="edit-upload-button generic-button"
              type="submit"
              onClick={uploadImage}
            >
              upload
            </button>
          )}
          <div className="top-text-wrapper ">
            <div className="top-wrapper-icons">
              <FaDog className="fren-icon blur-effect" />
              <FaBone className="bone-icon blur-effect" />
            </div>
            <div className="top-wrapper-text blur-effect">
              <p className="fren-count">4 frens</p>
              <p className="dog-rating">4.8</p>
            </div>
          </div>
          <img className="profile-bubble blur-effect" src={bubble} alt="#" />
        </div>
        <img className="profile-bio" src={bioBubble} alt="#" />
        <div className="middle-profile-wrapper">
          {bioClick ? (
            <BsPencil className="hidden" onClick={pencilClick} />
          ) : (
            <BsPencil className="edit-pen" onClick={pencilClick} />
          )}
          {bioClick ? (
            <div className="edit-bio-wrapper">
              <textarea
                className="edit-bio-textarea"
                type="text"
                onChange={handleEditBioChange}
                placeholder="enter a bio here..."
                maxLength="125"
                value={bio}
                required
              />
              <div
                value={text}
                className="edit-bio-counter"
                onChange={handleEditBioChange}
              >
                {wordCount}
              </div>
            </div>
          ) : (
            <textarea className="hidden" type="text" />
          )}
        </div>
        <div className="bottom-profile-wrapper">
          <div className="feedback-list-wrapper blur-effect">
            <p className="feedback">feedback</p>
            <div className="feedback-list">
              <li>the goodest boy</li>
              <li>loves scritches</li>
              <li>loves walks</li>
            </div>
          </div>
          {isClicked ? (
            <div className="edit-page-buttons-wrapper">
              <button className="generic-button" disabled>
                saved
              </button>
              <button
                className="generic-button"
                onClick={() => history.goBack()}
              >
                back
              </button>
            </div>
          ) : (
            <div className="edit-page-buttons-wrapper">
              <button
                className="generic-button"
                type="submit"
                onClick={handleEditSubmit}
              >
                save
              </button>
              <button
                className="generic-button"
                onClick={() => history.goBack()}
              >
                back
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
