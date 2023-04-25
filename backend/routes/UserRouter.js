const express=require('express')
const router=express.Router();
const User=require('../model/user');
const { body,validationResult } = require('express-validator');
let dep= require('./dependencies/user')

router.post('/signup',[
    body('email','enter a valid email').isEmail(),
    body('name','name must be atleast 3 char long').isLength({min:3}),
    body('pass','password must be 5 char long').isLength({min:5})
],dep.signup)


router.post('/login',[
    body('email','invalid email').isEmail(),
    body('pass','invalid password').isLength({min:5})
],dep.login)

router.get('/logout',dep.logout);


module.exports=router;
