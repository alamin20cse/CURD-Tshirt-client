const AddTshirt = () => {
  const handelSubmit = (e) => {
      e.preventDefault();
      const brand = e.target.brand.value;
      const size = e.target.size.value;
      const color = e.target.color.value;
      const category = e.target.category.value;
      const photo = e.target.photo.value;
    
      const newData = { brand, size, color, category, photo };
      // console.log(newData);

      // send to server

      fetch('http://localhost:4000/tshirts',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(newData)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })

  };

  return (
      <div className="hero bg-base-200 flex">
          <div className="hero-content flex-col lg:flex-row-reverse flex-1">
              <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Add Tshirt</h1>
                  <p className="py-6">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                      quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
              </div>
              <div className="card bg-base-100 w-full shadow-2xl flex-1">
                  <form onSubmit={handelSubmit} className="card-body">
                      {/* Brand */}
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Tshirt Brand Name</span>
                          </label>
                          <input name="brand" type="text" placeholder="Tshirt Brand Name" className="input input-bordered" required />
                      </div>

                      {/* Photo URL */}
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Tshirt Photo URL</span>
                          </label>
                          <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                      </div>

                      {/* Color */}
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text">Color</span>
                          </label>
                          <input name="color" type="text" placeholder="Color" className="input input-bordered" required />
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
                          <button className="btn btn-primary">Add</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  );
};

export default AddTshirt;
