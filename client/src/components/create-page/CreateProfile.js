import { useState } from "react";
import { Image } from "cloudinary-react";
import "./CreateProfile.css";
import Header from "../../components/Header";
import { NavLink } from "react-router-dom";
import { GiDogHouse } from "react-icons/gi";

export default function CreateProfile() {
  const [imageSelected, setImageSelected] = useState("");
  const [imageType, setImageType] = useState("");
  const [imagePublicId, setImagePublicId] = useState("");
  const [imageId, setImageId] = useState("");

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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="grid-layout-app">
      <Header title="create profile" />
      <main className="main">
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>upload</button>

        <Image
          className={imageId ? "create-profile-image" : "hidden"}
          id={imageId}
          cloudName="dy1xpaosj"
          publicId={`https://res.cloudinary.com/dy1xpaosj/image/upload/v1620380186/${imagePublicId}.${imageType}`}
        />
      </main>
      <footer className="footer">
        <nav className="nav">
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
