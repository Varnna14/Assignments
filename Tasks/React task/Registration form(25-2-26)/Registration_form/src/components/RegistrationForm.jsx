import React, { useState } from "react";
function RegistrationForm() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");
  const [message,setMessage] = useState("");
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!name) {
    setMessage("Please Enter Name");
  } 
  else if (!email) {
    setMessage("Please Enter Email");
  } 
  else if (!age) {
    setMessage("Please Enter Age");
  } 
  else if (Number(age) < 18) {
    setMessage("Age must be above 18");
  } 
  else {
    setMessage("Registration Successful");
  }
};
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      background:"whiteSmoke"
    }}>

      <form onSubmit={handleSubmit} style={{
        background:"white",
        padding:"25px",
        borderRadius:"10px",
        width:"300px",
        boxShadow:"0 4px 10px rgba(0,0,0,0.2)"
      }}>

        <h2 style={{textAlign:"center" }}>Register</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) =>setAge(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={btn}>
          Submit
        </button>

        {message && (
          <p style={{
            marginTop:"10px",
            color: message === "Registration Successful" ? "green" : "red",
            textAlign:"center"
          }}>
            {message}
          </p>
        )}

      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  margin: "8px 0",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const btn = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default RegistrationForm;