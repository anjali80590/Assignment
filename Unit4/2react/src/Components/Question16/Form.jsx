// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// // import "./Form.css";

// function Form() {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     image: "",
//     discount: "",
//   });
//   const [error, setError] = useState("");

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const { name, price, image, discount } = formData;

//     // Basic validation
//     if (!name || !price || !image) {
//       setError("Name, price and image are required");
//       return;
//     }
//     if (!image.startsWith("http")) {
//       setError("Image URL must start with http");
//       return;
//     }
//     if (discount && (discount < 0 || discount > 100)) {
//       setError("Discount must be between 0 and 100");
//       return;
//     }

//     // Add product
//     const newProduct = {
//       name,
//       price,
//       image,
//       discount,
//     };
//     setProducts([...products, newProduct]);

//     // Reset
//     setFormData({ name: "", price: "", image: "", discount: "" });
//     setError("");
//   }

//   return (
//     <div className="form-container">
//       <h2>Add Product</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <input
//           name="price"
//           placeholder="Price"
//           type="number"
//           value={formData.price}
//           onChange={handleChange}
//         />
//         <input
//           name="image"
//           placeholder="Image URL"
//           value={formData.image}
//           onChange={handleChange}
//         />
//         <input
//           name="discount"
//           placeholder="Discount (%)"
//           type="number"
//           value={formData.discount}
//           onChange={handleChange}
//         />
//         <button type="submit">Add</button>
//       </form>

//       <div className="product-list">
//         {products.map((p, i) => (
//           <ProductCard key={i} {...p} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Form;

