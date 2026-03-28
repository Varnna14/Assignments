let products=[
    {id:1,name:"laptop",price:50000,category:"Electronics"},
    {id:2,name:"phone",price:20000,category:"Electronics"},

];

const getAllproducts=()=>products;
const getProductById=(id)=>{
    return products.find(product=>product.id===id);
};

const addProduct = (productData) => {
  const maxId = products.length > 0
    ? Math.max(...products.map(p => p.id))
    : 0;
  const newProduct = {
    id: maxId + 1,
    ...productData
  };
  products.push(newProduct);
  return newProduct;
};
const updateProduct=(id,updateData)=>{
    const product=getProductById(id);   
    if(product){
        Object.assign(product,updateData);
        return product;
    }
    return null;
};
const deleteProduct=(id)=>{
    const index=products.findIndex(product=>product.id===id);
    if(index!==-1){
        products.splice(index,1);
        return true;
    }
    return false;
};
    module.exports={
    getAllproducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}