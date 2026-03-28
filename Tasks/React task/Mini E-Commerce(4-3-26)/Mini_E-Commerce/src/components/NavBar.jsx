import {useContext} from "react"
import{CartContext} from "../context/CartContext";
function NavBar(){
    const {cartItems}=useContext(CartContext);
    return(
        <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      background: "#222",
      color: "white"
    }}>
            <h1 style={{textAlign:'center',color:'white'}}>🛒 Mini E-Commerce</h1>
            <p>Cart Items: {cartItems.length}</p>
            </div>
    );  
}
export default NavBar;