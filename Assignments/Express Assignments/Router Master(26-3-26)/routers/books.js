const express=require("express");
const router=express.Router();
let books=[{
    id:1,title:"Book One"},{
    id:2,title:"Book Two"}
];
router.get("/",(req,res)=>{
    res.json(books);
});
router.get("/:id",(req,res)=>{
    const book=books.find(b=>b.id==req.params.id);
    res.json(book);
});
router.post("/",(req,res)=>{
    const newBook={
        id:books.length+1,title:req.body.title};
        books.push(newBook);
        res.json(newBook);
    });

router.put("/:id",(req,res)=>{
    const book=books.find(b=>b.id==req.params.id);
    if(book){
        book.title=req.body.title;
        res.json(book);     
    }
});
router.delete("/:id",(req,res)=>{
    books=books.filter(b=>b.id!=req.params.id);
    res.json({message:"Book deleted"});
});

module.exports=router;