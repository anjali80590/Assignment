import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  let filtered = [...products];
  if (cat) filtered = filtered.filter((p) => p.category === cat);
  if (sort === "asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "desc") filtered.sort((a, b) => b.price - a.price);

  return (
    <div style={{ padding: 20 }}>
      <select onChange={(e) => setCat(e.target.value)}>
        <option value="">All</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
      </select>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Default</option>
        <option value="asc">Price Low to High</option>
        <option value="desc">Price High to Low</option>
      </select>
      {filtered.map((p) => (
        <div key={p.id}>
          <Link to={`/product/${p.id}`}>
            {p.title} - ₹{p.price}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
