import { useState } from "react";
import { Image } from "cloudinary-react";
import "./CreateProfile.css";
import Header from "../../components/Header";
import { NavLink } from "react-router-dom";
import { AiFillSave } from "react-icons/ai";
import { GiDogHouse } from "react-icons/gi";
import { addProfileToLocalStorage } from "../../utils/itemStorage";
const baseUrl = "http://localhost:4000/users";

export default function CreateProfile() {
  const [imageSelected, setImageSelected] = useState("");
  const [imageType, setImageType] = useState("");
  const [imagePublicId, setImagePublicId] = useState("");
  const [imageId, setImageId] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [counter, setCounter] = useState(125);
  const [clicked, setClicked] = useState(false);
  const [info, setInfo] = useState({});

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
        console.log("Success:", result);
        if (result.error.message === "Missing required parameter - file") {
          alert("Please select a picture to upload.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const profile = { name, bio, imageType, info };
  function handleCreateProfileSubmit(e) {
    e.preventDefault();
    if (name === "" || imageType === "" || bio === "") {
      alert(
        "Please fill out the name and bio, and pick a photo and upload. If you've done all this then hit save!"
      );
    } else {
      addProfileToLocalStorage("user", profile);
      setClicked(!clicked);
    }

    const initDetails = {
      method: "patch",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      mode: "cors",
      body: JSON.stringify({
        username: "hugh",
        picture: `https://res.cloudinary.com/dy1xpaosj/image/upload/v1620380186/${imagePublicId}.${imageType}`,
        bio: bio,
        name: name,
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

  function handleNameChange(e) {
    const newName = e.target.value.replace(/[^a-zA-Z\s]/g, "");

    setName(newName);
  }

  function handleBioChange(e) {
    const newBio = e.target.value;

    setBio(newBio);
    setCounter(counter - 1);
    if (e.target.value === "") {
      setCounter(125);
    }
  }

  return (
    <div className="grid-layout-app">
      <Header title="create profile" />
      <main className="main create-profile-page">
        <form
          className="create-profile-form"
          onSubmit={handleCreateProfileSubmit}
        >
          <div className="top-wrapper">
            <p className="top-wrapper-name-title">Name</p>
            <input
              className="top-wrapper-name"
              type="text"
              placeholder="name here..."
              onChange={handleNameChange}
              maxLength="10"
              value={name}
              required
            />

            <p className="top-wrapper-picture-title">Picture</p>
            <input
              className="top-wrapper-picture"
              type="file"
              name="upload"
              id="upload"
              onChange={(event) => {
                setImageSelected(event.target.files[0]);
              }}
              required
            />
            <button className="top-wrapper-upload" onClick={uploadImage}>
              upload
            </button>
          </div>
          <div className="middle-wrapper">
            <input
              type="text"
              onChange={handleBioChange}
              placeholder="enter a bio here..."
              maxLength="125"
              value={bio}
              required
            />
            <div className="bio-counter" onChange={handleBioChange}>
              {counter}
            </div>
          </div>

          <Image
            className={imageId ? "create-profile-image" : "hidden"}
            placeholder="loading..."
            id={imageId}
            cloudName="dy1xpaosj"
            publicId={`https://res.cloudinary.com/dy1xpaosj/image/upload/v1620380186/${imagePublicId}.${imageType}`}
          />
          <button
            className={
              clicked === true ? "hidden" : "create-profile-save-button"
            }
          >
            <AiFillSave type="submit" onClick={handleCreateProfileSubmit} />
          </button>
        </form>
      </main>
      <footer className="footer">
        <nav className="nav footer">
          <button className={clicked === false ? "hidden" : "nav-button"}>
            <NavLink exact to="/profile">
              <GiDogHouse
                className={clicked === false ? "hidden" : "nav-icons"}
              />
            </NavLink>
          </button>
        </nav>
      </footer>
    </div>
  );
}
