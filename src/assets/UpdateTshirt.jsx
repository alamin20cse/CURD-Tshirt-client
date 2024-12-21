import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Updatetshirt = () => {
    const tshirt = useLoaderData();
    const { _id, brand, size, color, category, photo } = tshirt;

    const handleUpdate = (e) => {
        e.preventDefault();
        const brand = e.target.brand.value;
        const size = e.target.size.value;
        const color = e.target.color.value;
        const category = e.target.category.value;
        const photo = e.target.photo.value;

        const updatedData = { brand, size, color, category, photo };
        console.log(updatedData);
        fetch(`http://localhost:4000/tshirts/${_id}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(updatedData)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
          })


    }


    return (

        <div>

            <h1>Update : {brand}</h1>
            <form onSubmit={handleUpdate} className="card-body">
                {/* Brand */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tshirt Brand Name</span>
                    </label>
                    <input name="brand" defaultValue={brand} type="text" placeholder="Tshirt Brand Name" className="input input-bordered" required />
                </div>

                {/* Photo URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tshirt Photo URL</span>
                    </label>
                    <input name="photo" defaultValue={photo} type="text" placeholder="Photo URL" className="input input-bordered" required />
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
                    <select name="size" className="select select-bordered w-full max-w-xs">
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
                    <select name="category" className="select select-bordered w-full max-w-xs">
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