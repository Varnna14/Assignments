const express = require("express");
const router=express.Router();
let students=[
    {id:1,name:"Arjun",course:"AI"},
    {id:2,name:"Priya",course:"Web Development"}
];

router.get("/",(req,res)=>{
    res.json(students);
});

router.get("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const student=students.find(s=>s.id===id);
    if(student){
        res.json(student);
    } else {
        res.status(404).json({message: "Student not found"});
    }
});

router.post("/add",(req,res)=>{
    const newStudent= req.body;
    students.push(newStudent);
    res.status(201).json({message: "Student added successfully", student: newStudent});
    
});
module.exports=router;