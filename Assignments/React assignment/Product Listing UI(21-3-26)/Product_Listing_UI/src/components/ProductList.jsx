import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

function ProductList() {
  const [filter, setFilter] = useState("ALL");
  const [cart, setCart] = useState([]);
  const [search,setSearch] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

 const filteredProducts = products.filter((p) => {
  return (
    (filter === "ALL" || p.category === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );
});
  return (
    <div>
      <h2>🛍️ Products</h2>

      <Filter setFilter={setFilter} />
      <input
         type="text" placeholder="Search..." value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", margin: "10px" }}/>

      <div className="grid">
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;