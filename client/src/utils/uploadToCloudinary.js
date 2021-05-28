export function uploadToCloudinary(formData) {
  return fetch("https://api.cloudinary.com/v1_1/dy1xpaosj/image/upload", {
    method: "PUT",
    body: formData,
  }).then((response) => response.json());
}
