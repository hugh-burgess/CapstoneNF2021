import { useState } from "react";
import { Image } from "cloudinary-react";
import "./CreateProfile.css";
import Header from "../../components/Header";
import { NavLink } from "react-router-dom";
import { AiFillSave } from "react-icons/ai";
import { GiDogHouse } from "react-icons/gi";

export default function CreateProfile() {
  const [imageSelected, setImageSelected] = useState("");
  const [imageType, setImageType] = useState("");
  const [imagePublicId, setImagePublicId] = useState("");
  const [imageId, setImageId] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [counter, setCounter] = useState(125);

  const uploadImage = () => {
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
        console.log("Success:", result);
        if (result.error.message === "Missing required parameter - file") {
          alert("Please select a picture to upload.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  function handleCreateProfileSubmit(e) {
    e.preventDefault();
    const nameInput =
      e.target.parentElement.parentElement.parentElement.parentElement[0].value;
    const imagePathInput =
      e.target.parentElement.parentElement.parentElement.parentElement[1].value;
    const bioInput =
      e.target.parentElement.parentElement.parentElement.parentElement[3].value;
    console.log(`name: ${nameInput}`);
    console.log(`image path: ${imagePathInput}`);
    console.log(`bio: ${bioInput}`);
    if (nameInput === "" || imagePathInput === "" || bioInput === "") {
      alert("please fill all details to save a profile");
    }
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleBioChange(e) {
    setBio(e.target.value);
    setCounter(counter - 1);
    if (e.target.value === "") {
      setCounter(125);
    }
  }

  // max length for bio 125

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
              value={bio}
              placeholder="enter a bio here..."
              maxLength="125"
              required
            />
          </div>
          <div onChange={handleBioChange}>{counter}</div>

          <Image
            className={imageId ? "create-profile-image" : "hidden"}
            id={imageId}
            cloudName="dy1xpaosj"
            publicId={`https://res.cloudinary.com/dy1xpaosj/image/upload/v1620380186/${imagePublicId}.${imageType}`}
          />
          <div className="save-wrapper">
            <button className="create-profile-save-button">
              <AiFillSave type="submit" onClick={handleCreateProfileSubmit} />
            </button>
          </div>
        </form>
      </main>
      <footer className="footer">
        <nav className="nav footer">
          <button className="nav-button">
            <NavLink exact to="/profile">
              <GiDogHouse className="nav-icons" />
            </NavLink>
          </button>
        </nav>
      </footer>
    </div>
  );
}
