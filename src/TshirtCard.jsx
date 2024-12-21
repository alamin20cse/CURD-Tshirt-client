import React from 'react';
import { Link } from 'react-router-dom';

const TshirtCard = ({tshirt}) => {

    const handleDelet=id=>{
       
    // console.log('deleted',id);
    fetch(`http://localhost:4000/tshirts/${_id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    }


    const {_id,brand,size,color,category,photo}=tshirt;
    return (
        <div className="card bg-gray-300 shadow-xl">
  <figure className='h-[150px]'>
    <img className='h-full'
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{brand}</h2>
    <p>Size:{size}</p>
    <p>Color : {color}</p>
    <p>Category:{category}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleDelet(_id)} className="btn btn-primary">Delete</button>
     
     <Link to={`/updatetshirt/${_id}`}> <button className='btn btn-primary'>Update</button></Link>
    </div>
  </div>
</div>
    );
};

export default TshirtCard;