const productModel = require('../models/productModel');
const AppError = require('../utils/appError');

const getProducts = (req, res, next) => {
    try{
        const products=
        productModel.getAllproducts();
        res.status(200).json({
            success:true,
            data:products
        });
    }catch(error){
            next(error);
        }       
    };

    const getProduct=(req,res,next)=>
    {        try{
            const id=parseInt(req.params.id);
            const product=productModel.getProductById(id);
            if(!product){
                return next(new AppError("Product not found", 404));
            }
            res.status(200).json({
                success:true,
                data:product
            });
        }catch(error){
            next(error);
        }
    };
     
    const createProduct=(req,res,next)=>
    {
        try{
            const {name,price,category}=req.body;
            if(!name || !price || !category){
                return next(new AppError("All required fields must be provided", 400));
            }
            const newProduct=productModel.addProduct({name,price,category});
            res.status(201).json({
                success:true,
                message:"Product added successfully",
                data:newProduct
            });
        }catch(error){
            next(error);
        }
    };
 const updateProduct=(req,res,next)=>
    {
        const id=parseInt(req.params.id);
        const {name,price,category}=req.body;
        const product=productModel.getProductById(id);
        if(!product){
            return next(new AppError("Product not found", 404));
        }
        product.name=name||product.name;
        product.price=price||product.price;
        product.category=category||product.category;
        res.json({
            success:true,
            message:"Product updated successfully",
            data:product
        });
    };
const deleteProduct=(req,res,next)=>
    {
        const id=parseInt(req.params.id);
        const product=productModel.getProductById(id);
        if(!product){
            return next(new AppError("Product not found", 404));
        }
        productModel.deleteProduct(id);
        res.json({
            success:true,
            message:"Product deleted successfully"
        });
    };
module.exports={getProducts,getProduct,createProduct,updateProduct,deleteProduct};