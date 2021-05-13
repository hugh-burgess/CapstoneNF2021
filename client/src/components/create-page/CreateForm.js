import { Image } from "cloudinary-react";
import { AiFillSave } from "react-icons/ai";

export default function CreateForm({
  handleCreateProfileSubmit,
  handleNameChange,
  imageId,
  name,
  handleBioChange,
  bio,
  counter,
  clicked,
  buttonName,
  uploadImage,
  setImageSelected,
  imageType,
  imagePublicId,
}) {
  return (
    <form className="create-profile-form" onSubmit={handleCreateProfileSubmit}>
      <div className="image-wrapper">
        <Image
          className={imageId ? "create-profile-image" : "hidden"}
          id={imageId}
          cloudName="dy1xpaosj"
          publicId={
            imageId
              ? `https://res.cloudinary.com/dy1xpaosj/image/upload/v1620380186/${imagePublicId}.${imageType}`
              : ""
          }
        />
        <div className={imageId ? "hidden" : "create-profile-title"}>
          Describe your Dog!
        </div>
      </div>
      <div className="name-and-bio-wrapper">
        <p className="wrapper-name-title">Name:</p>
        <textarea
          className="wrapper-name"
          type="text"
          placeholder="name here..."
          onChange={handleNameChange}
          maxLength="10"
          value={name}
          required
        />

        <p className="wrapper-bio-title">Bio:</p>
        <textarea
          className="wrapper-bio"
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
      <label className="input-file-label">
        <input
          className="browse-button"
          type="file"
          name="upload"
          id="upload"
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }}
          required
        />
        <button className="upload-button" onClick={uploadImage}>
          {buttonName}
        </button>
      </label>
      <div className="bottom-wrapper">
        <button
          className={clicked === true ? "hidden" : "create-profile-save-button"}
        >
          <AiFillSave type="submit" onClick={handleCreateProfileSubmit} />
        </button>
      </div>
    </form>
  );
}
