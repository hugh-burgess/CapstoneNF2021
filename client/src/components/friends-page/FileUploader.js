import { useRef } from "react";

export default function FileUploader({
  onFileSelectError,
  onFileSelectSuccess,
}) {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file.size > 1048576)
      // 1048576 Bytes = 1024 KB = 1 MB
      onFileSelectError({ error: "File size cannot exceed more than 1MB" });
    else onFileSelectSuccess(file);
  };

  return (
    <div className="file-uploader">
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileInput}
      />
      <button
        type="submit"
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="hidden"
      >
        save
      </button>
    </div>
  );
}
