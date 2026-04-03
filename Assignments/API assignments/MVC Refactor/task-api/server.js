const express=require("express");
const app=express();
app.use(express.json());
const {logger}=require("./middlewares/logger");
app.use(logger);

const taskRouter=require("./routes/taskRoutes");
app.use("/api/tasks",taskRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});