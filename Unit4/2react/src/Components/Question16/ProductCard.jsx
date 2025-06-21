import React from "react";

function ProductCard({ name, price, image, discount }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      {discount && <span className="discount">{discount}% OFF</span>}
    </div>
  );
}

export default ProductCard;


