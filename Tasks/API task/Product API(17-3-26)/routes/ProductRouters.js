const express=require("express");
const router=express.Router();
let products=[
    {id:1,name:"Laptop",price:5000},
    {id:2,name:"Smartphone",price:20000}
];
router.get("/",(req,res)=>{
    res.json(products);
});
router.post("/add",(req,res)=>{
    const {id,name,price}=req.body;
    if(!id||!name||!price){
        return res.status(400).json({message:"All fields are required"});
    }
    const newProduct={id,name,price};
    products.push(newProduct);
    res.status(201).json({message:"Product added successfully",product:newProduct});
});
router.put("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const {name,price}=req.body;
    const product=products.find(p=>p.id===id);
    if(product){
        product.name=name||product.name;
        product.price=price||product.price;
        res.json({message:"Product updated successfully",product});
    } else {
        res.status(404).json({message:"Product not found"});
    }
});
    router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter(p => p.id !== id);
    res.json({ message: "Product deleted successfully" });
});
module.exports=router;