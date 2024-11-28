import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ProductCard = ({ title, price, imageSrc }) => (
  <div className="col">
    <div className="card border-0 shadow-sm position-relative">
      <img
        src={imageSrc}
        alt={title}
        className="card-img-top" 
        style={{ height: '250px', objectFit: 'cover', borderRadius: '0.25rem' }} 
      />
      
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
       <p className=" text-muted">${price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
);

export default ProductCard;
