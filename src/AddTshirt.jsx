import axios from "axios";
import { useState } from "react";

const AddTshirt = () => {
  const [image, setImage] = useState(null); // State to hold the selected image
  const [photoUrl, setPhotoUrl] = useState(""); // State to store the uploaded photo URL

  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];
    setImage(file); // Store the selected file in state

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("http://localhost:4000/upload", formData);
      const uploadedUrl = response.data.url; // Adjust the response data field based on your API
      setPhotoUrl(uploadedUrl);
      console.log("Photo uploaded successfully:", uploadedUrl);
    } catch (error) {
      console.error("Error uploading the photo:", error);
      alert("Failed to upload the photo. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const brand = e.target.brand.value;
    const size = e.target.size.value;
    const color = e.target.color.value;
    const category = e.target.category.value;

    if (!photoUrl) {
      alert("Please upload a photo before submitting.");
      return;
    }

    const newData = { brand, size, color, category, photo: photoUrl };

    try {
      const response = await fetch("http://localhost:4000/tshirts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form data.");
      }

      const data = await response.json();
      console.log("T-shirt added successfully:", data);
      alert("T-shirt added successfully!");
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("Failed to add T-shirt. Please try again.");
    }
  };

  return (
    <div className="hero bg-base-200 flex">
      <div className="hero-content flex-col lg:flex-row-reverse flex-1">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add T-shirt</h1>
          <p className="py-6">
            Add a new T-shirt to the inventory by filling in the details below.
          </p>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl flex-1">
          <form onSubmit={handleSubmit} className="card-body">
            {/* Brand */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">T-shirt Brand Name</span>
              </label>
              <input
                name="brand"
                type="text"
                placeholder="T-shirt Brand Name"
                className="input input-bordered"
                required
              />
            </div>

            {/* Photo Upload */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">T-shirt Photo</span>
              </label>
              <input
                name="photo"
                type="file"
                onChange={handleUploadPhoto}
                className="input input-bordered"
                required
              />
            </div>

            {/* Color */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Color</span>
              </label>
              <input
                name="color"
                type="text"
                placeholder="Color"
                className="input input-bordered"
                required
              />
            </div>

            {/* Size */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Size</span>
              </label>
              <select
                name="size"
                className="select select-bordered w-full max-w-xs"
              >
                <option>XXL</option>
                <option>XL</option>
                <option>L</option>
                <option>M</option>
                <option>S</option>
              </select>
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered w-full max-w-xs"
              >
                <option>Full Sleeve</option>
                <option>Half Sleeve</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTshirt;
