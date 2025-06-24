import React, { useState } from "react";
import '../styles/Question2.css'
function Question2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={fetchProducts}>Load Products</button>
        {products.length > 0 && (
          <button onClick={clearProducts} className="clear">
            Clear Products
          </button>
        )}
     
      </div>

      {loading && <p className="status">Loading...</p>}
      {error && <p className="status error">{error}</p>}
      {!loading && products.length === 0 && !error && (
        <p className="status">No products available.</p>
      )}

      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question2;
