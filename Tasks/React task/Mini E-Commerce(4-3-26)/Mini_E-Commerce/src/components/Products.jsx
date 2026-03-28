import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../services/productServices";

function Products() {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      padding: "20px"
    }}>
      {products.map((item) => (
        <div key={item.id} style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}>
          <h3>{item.name}</h3>
          <p style={{ fontWeight: "bold" ,color:"#555S"}}>Price: ₹{item.price}</p>

          <button
            onClick={() => addToCart(item.name)}
            style={{
              marginTop: "10px",
              padding: "8px 12px",
              border: "none",
              background: "#007bff",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;