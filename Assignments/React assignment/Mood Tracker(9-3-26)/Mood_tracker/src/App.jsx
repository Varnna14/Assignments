import { useState } from "react";

function App() {
  const [mood, setMood] = useState("😊");

  return (
    <div style={{
      height: "200vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "White"
    }}>
      
      <div style={{
        backgroundColor: "lightblue",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        textAlign: "center",
        width: "300px"
      }}>

        <h1 style={{
          marginBottom:"10px",
           padding:"20px"
           }
           }>Mood Tracker</h1>

        <h2 style={
          {
            fontSize:"40px", 
            margin: "20px 0"
            }
            }>
          {mood}
        </h2>

        <div style={
          {
            display:"flex",
            justifyContent:"space-around"
            }
            }>
          
          <button style={btnStyle} onClick={() =>setMood("😊")}>
            Happy
          </button>

          <button style={btnStyle} onClick={() =>setMood("😢")}>
            Sad
          </button>

          <button style={btnStyle} onClick={() =>setMood("😡")}>
            Angry
          </button>

          <button style={btnStyle} onClick={() => setMood("😴")}>
            Sleepy
          </button>

        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  backgroundColor: "#4CAF50",
  color: "white",
  fontSize: "12px",
  transition: "0.3s"
};

export default App;