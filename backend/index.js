const express =require('express');
const cookieParser = require('cookie-parser');
const connectTodb=require('./db');

connectTodb();
var cors = require('cors')
const app=express();
app.use(cors())

app.use(cookieParser());


app.use(express.json())

app.use('/user',require('./routes/UserRouter'))
app.use('/inote',(require('./routes/Inote')));
app.listen(5000,()=>{
    console.log('listening to 5000');
})