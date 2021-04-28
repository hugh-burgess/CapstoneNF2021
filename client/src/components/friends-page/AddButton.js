import { useState } from "react";
import "./AddButton.css";
import FileUploader from "./FileUploader";

export default function AddButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = () => {
    const formData = new FormData();
    formData.append("name", friendName);
    formData.append("file", selectedFile);

    axios
      .post(MONGO_URL, formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };

  function handleButtonClick(event) {
    event.preventDefault();
    setIsClicked(!isClicked);
    console.log(isClicked);
  }

  function handleNameChange(event) {
    setFriendName(event.target.value);
    console.log(event.target.value);
  }

  function onBrowseFileChange(event) {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  return (
    <div className="add-friend-wrapper">
      <div className="add-friend-button-wrapper">
        {!isClicked && (
          <button className="add-friend-button" onClick={handleButtonClick}>
            Add A Friend
          </button>
        )}
        {isClicked && (
          <form className="popup-box">
            <button onClick={handleButtonClick} className="popup-delete">
              close
            </button>
            <input
              type="text"
              name="friendName"
              placeholder="name goes here..."
              onChange={handleNameChange}
              value={friendName}
            />
            <FileUploader
              onFileSelectSuccess={(file) => setSelectedFile(file)}
              onFileSelectError={({ error }) => alert(error)}
            />
            <button onClick={submitForm}>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
