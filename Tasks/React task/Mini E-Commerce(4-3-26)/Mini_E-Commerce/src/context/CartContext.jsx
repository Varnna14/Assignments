import {createContext,useState} from "react";
export const CartContext = createContext();
function CartProvider({children}){
    const [cartItems,setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    const removeFromCart=(index)=>{
        const updated=cartItems.filter((_,i)=>i!==index);
        setCartItems(updated);  
    };
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    );  
}
export default CartProvider;