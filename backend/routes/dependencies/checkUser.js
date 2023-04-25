const jwt=require('jsonwebtoken')
require('dotenv').config();

const userCheck=(req,res,next)=>{
    const token=req.header('inoteLogin');
    
    if(token){
        
    const data=jwt.verify(token,process.env.secret)
    req.user=data;
    next()
}
else{
    return res.send('no token, login to check your notes');  
}

}
module.exports=userCheck;