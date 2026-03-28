import { useState } from "react";

function App() {
  const [task, setTask]=useState("");
  const [tasks, setTasks]=useState([]);

  const addTask=() =>{
    if (task === "")return;
    setTasks([...tasks,task]);
    setTask("");
  };

  const deleteTask=(index) =>{
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:"lightpink"
    }}>
      
      <div style={{
        background:"white",
        padding:"25px",
        borderRadius:"12px",
        boxShadow:"0 5px 15px rgba(0,0,0,0.2)",
        width:"300px",
        textAlign:"center"
      }}>

        <h2>Task List</h2>

        <div style={{
           display: "flex",
           gap: "10px", 
           marginBottom: "15px" 
           }
           }>
          <input
            type="text"
            value={task}
            onChange={(e) =>setTask(e.target.value)}
            placeholder="Enter task"
            style={{
              flex: 1,
              padding:"8px",
              borderRadius:"6px",
              border:"1px solid #ccc"
            }}
          />

          <button onClick={addTask} style={addBtn}>
            Add
          </button>
        </div>

        {tasks.length === 0 &&<p>No tasks yet</p>}

        {tasks.map((t, index) => (
          <div key={index} style={taskItem}>
            <span>{t}</span>
            <button onClick={() => deleteTask(index)} style={deleteBtn}>
              ❌
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

// Styles
const addBtn = {
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer"
};

const deleteBtn = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "5px 8px",
  borderRadius: "6px",
  cursor: "pointer"
};

const taskItem = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f1f1f1",
  padding: "8px",
  margin: "5px 0",
  borderRadius: "6px"
};

export default App;