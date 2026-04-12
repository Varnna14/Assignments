const express =require("express");
const connectDB=require("./config/db");

const postRoutes=require("./routes/postRoutes");
require("dotenv").config();
const app=express();
app.use(express.json());
connectDB();

app.use("/api/posts",postRoutes);
app.get("/",(req,res)=>{
    res.send("Blog Api Running...");
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});