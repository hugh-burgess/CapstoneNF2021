import { useState } from "react";
import { Image } from "cloudinary-react";

export default function CreateProfile() {
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("files", imageSelected);
    formData.append("upload_preset", "s2bkhsfz");

    fetch("https://api.cloudinary.com/v1_1/dy1xpaosj/image/upload", {
      method: "PUT",
      body: formData,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <input
        type="file"
        name="upload"
        id="upload"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>upload</button>

      <Image cloudName="dy1xpaosj" publicId="" />
    </div>
  );
}
