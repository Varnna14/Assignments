import React, { useState } from "react";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) =>{
    return email.includes("@") && email.includes(".");
  };

  const checkPasswordStrength = (password) => {
    if (password.length <= 6) return "Weak Password ❌";
    if (password.length < 10) return "Medium Password ⚠️";
    return "Strong Password ✅";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter email");
    } 
    else if (!validateEmail(email)) {
      setMessage("Invalid email format");
    } 
    else if (!password) {
      setMessage("Please enter password");
    } 
    else if (password.length < 6) {
      setMessage("Password must be more than 6 characters");
    } 
    else {
      setMessage("Signup Successful ");
    }
  };

  const strength = checkPasswordStrength(password);

  return (
    <div style={container}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ textAlign: "center" }}>Signup</h2>

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
          style={input}
        />

        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage("");
          }}
          style={input}
        />

      
        {password && (
          <p style={{
            fontSize: "14px",
            color:
              strength === "Strong Password ✅"
                ? "green"
                : strength === "Medium Password ⚠️"
                ? "orange"
                : "red"
          }}>
            Strength: {strength}
          </p>
        )}

        <button type="submit" style={btn}>
          Sign Up
        </button>

        {message && (
          <p style={{
            textAlign: "center",
            marginTop: "10px",
            color: message.includes("Successful") ? "green" : "red"
          }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "rgba(0,0,0,0.7rd)"
};

const formStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "10px",
  width: "300px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
};

const input = {
  width: "100%",
  padding: "8px",
  margin: "8px 0",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const btn = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#6a11cb",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default SignupForm;