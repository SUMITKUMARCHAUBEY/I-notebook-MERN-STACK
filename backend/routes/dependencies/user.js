require('dotenv').config();
const { body,validationResult } = require('express-validator');
const User=require('../../model/user');
var bcrypt=require('bcryptjs')

var jwt = require('jsonwebtoken');


const signup=async (req,res)=>{   
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            let success=false
            return res.status(400).json({success,errors:errors.array()})
        }
    
        const {name,email,pass}=req.body;
        // console.log(name,email,pass);
      let user=await User.findOne({email:email})
        
            if(user){
                let success=false;
                res.json({success,data:'user already exist'});
    
            }
            else{
               
                const salt=await bcrypt.genSalt(10);
                const hash=await bcrypt.hash(pass,salt);
                const newuser= new User({
                    name:name,email:email,password:hash
                })
                newuser.save()
                .then(user=>{
                    let success=true
                    console.log(('user created'));
                    res.json({success,data:'user created'})
                })
                .catch(err=>{
                    let success=false;
                    console.log(err);
                    res.json({success,data:err})
                })
            }
    }
    
       


const login=async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {email,pass}=req.body;
    const user=await User.findOne({email:email})
    if(user){
        bcrypt.compare(pass,user.password,(err,result)=>{
            // console.log(err);
            if(result){
                
                const token=jwt.sign({id:user._id},process.env.secret);
                
                res.setHeader('Cookie-Setup',[`inoteLogin=${token}`]);
                // res.json('Cookie-Setup',[`inoteLogin=${token}`]);
                res.json({success:true,data:token});
                

            }
            else{
                res.json('password did not match');
                
            }
        })
    } 
    else{
        res.json('invalid credencials')
    }

}

const logout=(req,res)=>{
 res.cookie('inoteLogin','',{maxAge:1})
 res.send('you are logged out successfully');

}

module.exports={signup,login,logout}