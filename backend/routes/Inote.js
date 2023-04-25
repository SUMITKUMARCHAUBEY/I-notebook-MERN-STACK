const express=require('express');
const router=express.Router();
const Note=require('../model/notes');
const userCheck=require('./dependencies/checkUser')
const { body,validationResult } = require('express-validator');
const notes=require('./dependencies/notes')

router.get('/getNotes',userCheck,notes.getnotes)

router.post('/addNote',userCheck,notes.addnotes)


router.put('/updateNote',[
  body('id','enter a valid id').isLength({min:24})]
  ,userCheck,notes.updateuser)

router.delete('/deleteNote',[
  body('id','enter a valid id').isLength({min:24})]
  ,userCheck,notes.deleteuser)


module.exports=router;