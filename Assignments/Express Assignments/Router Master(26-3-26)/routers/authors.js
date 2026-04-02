const express=require("express");
const router=express.Router();
let authors=[
    {id:1,name:"Author One"},{id:2,name:"Author Two"}
];
router.get("/",(req,res)=>{
    res.json(authors);
});
router.get("/:id",(req,res)=>{
    const author=authors.find(a=>a.id==req.params.id);
    res.json(author);
});
router.post("/",(req,res)=>{
    const newAuthor={
        id:authors.length+1,name:req.body.name};
        authors.push(newAuthor);
        res.json(newAuthor);    

    });
    router.put("/:id",(req,res)=>{
        const author=authors.find(a=>a.id==req.params.id);  
        if(author){
            author.name=req.body.name;
            res.json(author);
        }
    });
router.delete("/:id",(req,res)=>{
    authors=authors.filter(a=>a.id!=req.params.id);
    res.json({message:"Author deleted"});
}); 
module.exports=router;
