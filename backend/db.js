require('dotenv').config()
const mongoose=require('mongoose');


const connectTodb=()=>{
    mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log('db connected');
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports=connectTodb;