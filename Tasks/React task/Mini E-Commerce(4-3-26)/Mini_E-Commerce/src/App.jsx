import CartProvider from "./context/CartContext";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
function App() {
  return (
    <CartProvider>
      <NavBar />
       <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        🛍️ Shopping App
      </h1>
      <Products />
      <Cart />
    </CartProvider>
  );
}
export default App;