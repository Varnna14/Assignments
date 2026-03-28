const logger=(req,res,next)=>{
    const time=new Date().toLocaleString();
    console.log(`Request Recieved at ${time}`);
    next();
}
module.exports=logger;