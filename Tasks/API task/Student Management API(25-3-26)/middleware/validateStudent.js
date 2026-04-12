const validateStudent=(req,res,next)=>{
    const {name,email,course,marks}=req.body;
    if(!name||!email||!course||marks===undefined){
        return res.status(400).json({message:"All fields are required"});
    }

    if(marks<0||marks>100){
        return res.status(400).json({message:"Marks should be between 0 and 100"});
    }
    next();
};

module.exports=validateStudent;
