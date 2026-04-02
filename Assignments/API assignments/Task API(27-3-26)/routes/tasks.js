const express=require("express");
const router=express.Router();
let tasks=[
    {
        id:1,title:"Learn Node",completed:false
    },
    {
        id:2,title:"Learn Express",completed:false
    }
];

router.get("/tasks",(req,res)=>{
    res.json(tasks);
});
router.get("/:id",(req,res)=>{
    const task=tasks.find(t=>t.id===parseInt(req.params.id));
    if(!task) {
        return res.status(404).json({message:"Task not found"});
    }
    res.json(task);
});
router.post("/",(req,res)=>{
    const newTask={
        id:tasks.length+1,
        title:req.body.title,
        completed:false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.put("/:id",(req,res)=>{
    const task=tasks.find(t=>t.id==req.params.id);
    if(!task) {
        return res.status(404).json({message:"Task not found"});
    }
    task.title=req.body.title??task.title;
    task.completed=req.body.completed??task.completed;
    res.json(task);
});

router.delete("/:id",(req,res)=>{
    const taskIndex=tasks.findIndex(t=>t.id==req.params.id);
    if(taskIndex===-1) {
        return res.status(404).json({message:"Task not found"});
    }
    tasks.splice(taskIndex,1);
    res.json({message:"Task deleted successfully"});
});

module.exports=router;