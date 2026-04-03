const tasks=require("../models/taskModel");

exports.getTasks=(req,res)=>{
    res.json(tasks);
};

exports.getTaskById=(req,res)=>{
    const task=tasks.find(t=>t.id==req.params.id);
    if(!task){
        return res.status(404).json({message:"Task not found"});
    }
    res.json(task);
};

exports.createTask=(req,res)=>{
    if(!req.body.title){
        return res.status(400).json({message:"Title is required"});
    }
    const newTask={
        id:tasks.length+1,
        title:req.body.title,
        completed:false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};
exports.updateTask=(req,res)=>{
    const task=tasks.find(t=>t.id==req.params.id);
    if(!task){
        return res.status(404).json({message:"Task not found"});
    }
   task.title=req.body.title ?? task.title;
   task.completed=req.body.completed ?? task.completed;
   res.json(task);
};
exports.deleteTask=(req,res)=>{
    const taskIndex=tasks.findIndex(t=>t.id==req.params.id);
    if(taskIndex===-1){
        return res.status(404).json({message:"Task not found"});
    }   
    tasks.splice(taskIndex,1);
    res.json({message:"Task deleted successfully"});
};  