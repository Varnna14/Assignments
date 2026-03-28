import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ textAlign: "center", margin: "20px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;