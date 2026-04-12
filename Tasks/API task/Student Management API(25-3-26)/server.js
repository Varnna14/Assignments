const express=require("express");
const studentRoutes=require("./routes/studentRoutes");
const app=express();
app.use(express.json());
app.use("/api/students",studentRoutes);
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});