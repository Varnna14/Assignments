import { useState, useEffect } from "react";

function App() {

  const products = [
    {id:1,name:"Laptop",price:50000},
    {id:2,name:"Phone",price:20000},
    {id:3,name:"Headphones",price:2000},
    {id:4,name:"Watch",price:3000}
  ];

  const [cartCount,setCartCount]=useState(0);

  useEffect(()=>{
    console.log("Cart updated:",cartCount);
  },[cartCount]);

  return(
    <div style={{
      minHeight:"100vh",
      background: "lightgray",
      padding:"20px"
    }}>

      <h1 style={{textAlign:"center" }}>🛒Product Cart</h1>

      <h2 style={{textAlign:"center"}}>
        Cart Items:{cartCount}
      </h2>

      <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        gap:"15px"
      }}>

        {products.map((product)=> (
          <div key={product.id} style={cardStyle}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button
              onClick={() =>setCartCount(cartCount + 1)}
              style={btn}
            >
              Add to Cart
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

// Styles
const cardStyle = {
  background:"white",
  padding:"15px",
  borderRadius:"10px",
  width:"180px",
  textAlign:"center",
  boxShadow:"0 4px 10px rgba(0,0,0,0.2)"
};

const btn = {
  marginTop:"10px",
  padding:"8px",
  border:"none",
  borderRadius:"6px",
  backgroundColor:"#28a745",
  color:"white",
  cursor:"pointer"
};

export default App;