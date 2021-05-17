import { FaDog } from "react-icons/fa";
import { FaBone } from "react-icons/fa";
import { BsPencil } from "react-icons/bs";
import { MdAddAPhoto } from "react-icons/md";
import bubble from "../../images/stat-bubble.svg";
import bioBubble from "../../images/bio-bubble.svg";
import "./Edit-Profile.css";
import { useEffect, useState } from "react";
import {
  addProfileToLocalStorage,
  getItemsFromLocalStorage,
} from "../../utils/itemStorage";
import { Image } from "cloudinary-react";
const baseUrl = "https://shielded-tundra-69796.herokuapp.com/users";

export default function EditContent() {
  const [picture, setPicture] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [bioClick, setBioClick] = useState(false);
  const [imageId, setImageId] = useState("");
  const [imageSelected, setImageSelected] = useState("");
  const [imageType, setImageType] = useState("");
  const [imagePublicId, setImagePublicId] = useState("");
  const [info, setInfo] = useState({});
  const [bio, setBio] = useState("");

  useEffect(() => {
    const user = getItemsFromLocalStorage("user");
    setPicture(user[0].info.url);
  }, []);

  const uploadImage = (e) => {
    e.preventDefault();
    console.log("submitted!");
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
        setIsClicked(!isClicked);

        console.log("Success:", result);
        if (result.error.message === "Missing required parameter - file") {
          alert("Please select a picture to upload.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const profile = { bio, imageType, info };
  function handleEditSubmit(e) {
    e.preventDefault();
    if (imageType === "" || bio === "") {
      alert(
        "Please fill out the name and bio, and pick a photo and upload. If you've done all this then hit save!"
      );
    } else {
      addProfileToLocalStorage("user", profile);
    }

    const initDetails = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      mode: "cors",
      body: JSON.stringify({
        username: "hugh",
        picture: `https://res.cloudinary.com/dy1xpaosj/image/upload/v1620380186/${imagePublicId}.${imageType}`,
        bio: bio,
      }),
    };
    fetch(baseUrl, initDetails)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleEditBio(e) {
    console.log("bio clicked!");
    const newBio = e.target.value;
    setBio(newBio);
  }

  function pencilClick(e) {
    e.preventDefault();
    setBioClick(!bioClick);
  }
  return (
    <form onSubmit={handleEditSubmit}>
      <div className="grid-wrapper">
        <div className="top-profile-wrapper">
          {!isClicked ? (
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
              publicId={`https://res.cloudinary.com/dy1xpaosj/image/upload/v1620380186/${imagePublicId}.${imageType}`}
            />
          )}
          <label className="edit-photo">
            <MdAddAPhoto />
            <input
              className="hidden"
              type="file"
              name="upload"
              id="upload"
              onChange={(event) => {
                console.log("photo clicked!");
                console.log(event.target.files[0]);
                setImageSelected(event.target.files[0]);
              }}
              required
            />
          </label>
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
          <BsPencil className="edit-pen" onClick={pencilClick} />
          {bioClick ? (
            <textarea
              className="wrapper-bio"
              type="text"
              onChange={handleEditBio}
              placeholder="enter a bio here..."
              maxLength="125"
              value={bio}
              required
            />
          ) : (
            <textarea
              className="hidden"
              type="text"
              onChange={handleEditBio}
              placeholder="enter a bio here..."
              maxLength="125"
              value={bio}
              required
            />
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
            <button className="save-button" disabled>
              saved
            </button>
          ) : (
            <button className="save-button" type="submit" onClick={uploadImage}>
              save
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
