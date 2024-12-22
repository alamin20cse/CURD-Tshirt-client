import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const Updatetshirt = () => {
    const tshirt = useLoaderData();
    const { _id, brand, size, color, category, photo } = tshirt;
    const [photoUrl, setPhotoUrl] = useState(photo);

    const handlePhotoUpload = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:4000/upload', formData);
            return response.data.url; // Assuming backend returns the file URL in `url` field
        } catch (error) {
            console.error('Error uploading the photo:', error);
            return null;
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const brand = e.target.brand.value;
        const size = e.target.size.value;
        const color = e.target.color.value;
        const category = e.target.category.value;

        let updatedPhoto = photoUrl;

        const fileInput = e.target.photo.files[0];
        if (fileInput) {
            const uploadedPhotoUrl = await handlePhotoUpload(fileInput);
            if (uploadedPhotoUrl) {
                updatedPhoto = uploadedPhotoUrl;
            }
        }

        const updatedData = { brand, size, color, category, photo: updatedPhoto };

        fetch(`http://localhost:4000/tshirts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Updated data:', data);
            });
    };

    return (
        <div>
            <h1>Update: {brand}</h1>
            <form onSubmit={handleUpdate} className="card-body">
                {/* Brand */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tshirt Brand Name</span>
                    </label>
                    <input name="brand" defaultValue={brand} type="text" placeholder="Tshirt Brand Name" className="input input-bordered" required />
                </div>

                {/* Photo Upload */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tshirt Photo</span>
                    </label>
                    <input name="photo" type="file" className="input input-bordered" />
                    {photoUrl && (
                        <p className="mt-2">
                            Current Photo: <a href={photoUrl} target="_blank" rel="noopener noreferrer">{photoUrl}</a>
                        </p>
                    )}
                </div>

                {/* Color */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Color</span>
                    </label>
                    <input name="color" defaultValue={color} type="text" placeholder="Color" className="input input-bordered" required />
                </div>

                {/* Size */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Size</span>
                    </label>
                    <select name="size" defaultValue={size} className="select select-bordered w-full max-w-xs">
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
                    <select name="category" defaultValue={category} className="select select-bordered w-full max-w-xs">
                        <option>FullShelve</option>
                        <option>HalfShelve</option>
                    </select>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Now</button>
                </div>
            </form>
        </div>
    );
};

export default Updatetshirt;
