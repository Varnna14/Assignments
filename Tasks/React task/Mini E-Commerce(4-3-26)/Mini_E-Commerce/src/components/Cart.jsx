import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);
    return (
        <div style={{padding: "20px"}}>
            <h2>🛒 Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index}style={{display: "flex",
            justifyContent: "space-between",
            background: "white",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <span>{item}</span>

            <button
              onClick={() => removeFromCart(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;