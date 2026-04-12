const express=require("express");
const router=express.Router();
const validateStudent=require("../middleware/validateStudent");

let students=[];
router.post("/",validateStudent,(req,res)=>{
    const {name,email,course,marks}=req.body;
    const newStudent={
        id:Date.now(),
        name,
        email,course,marks};

    
    students.push(newStudent);
    res.json({message:"Student added",student:newStudent});

});

router.get("/",(req,res)=>{
    res.json({students});
});

router.put("/:id",(req,res)=>{
    const id=Number(req.params.id);
    const {marks}=req.body;
    const student=students.find(s=>s.id===id);
    if(!student){
        return res.status(404).json({message:"Student not Found"});
    }
    student.marks=marks;
    res.json({message:"Student marks updated",student});
});

router.delete("/:id",(req,res)=>{
    const id=Number(req.params.id);
    const index=students.findIndex(s=>s.id===id);
    if(index===-1){
        return res.status(404).json({message:"Student not Found"});
    }
    students.splice(index,1);
    res.json({message:"Student deleted"});
});

module.exports=router;