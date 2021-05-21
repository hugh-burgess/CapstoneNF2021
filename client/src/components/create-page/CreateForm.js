import { Image } from "cloudinary-react";
import { AiFillSave } from "react-icons/ai";
export default function CreateForm({
  handleCreateProfileSubmit,
  handleNameChange,
  imageId,
  name,
  handleBioChange,
  bio,
  clicked,
  buttonName,
  imageStatus,
  uploadImage,
  setImageSelected,
  imageType,
  text,
  wordCount,
  imagePublicId,
  imageSelected,
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
        <div value={text} className="bio-counter" onChange={handleBioChange}>
          {wordCount}
        </div>
      </div>
      <label className="input-file-label">
        <label HTMLfor="upload" className="generic-button browse-button">
          Browse
        </label>
        <input
          className="hidden"
          type="file"
          name="upload"
          id="upload"
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }}
          required
        />
        {imageSelected && (
          <button
            className="generic-button browse-button"
            onClick={uploadImage}
            disabled={imageStatus === "loaded" ? true : false}
          >
            {buttonName}
          </button>
        )}
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
