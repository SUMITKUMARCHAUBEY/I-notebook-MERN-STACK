const { body,validationResult } = require('express-validator');
const Note=require('../../model/notes');

const getnotes=async(req,res)=>{
    // console.log(req.user.id);
    // console.log(req.user);

    const note = await Note.find({ user:req.user.id });
    
    if (!note) {
      return res.status(404).json({ msg: 'Note not found' });
    }
    // console.log(notes);
    res.json(note);  
}

const addnotes=(req,res)=>{
  
   
    const {title,desc,tag}=req.body;
   
    const note= new Note({
      title:title,desc:desc,user:req.user.id,tag:tag
    })
    note.save()
    .then(user=>{
      res.json(user);
    })
    .catch(err=>{
      console.log('internal server error');
      res.send('internal server error');
    })
  }


 const updateuser= (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

  const {id,title,desc,tag}=req.body;
  Note.findByIdAndUpdate(id,{title:title,desc:desc,tag:tag},{new:true})
  .then(user=>{
    res.json(user);
  })
  .catch(err=>{
    console.log(err);
    res.send('please select the note you want to update')
  })
}

const deleteuser=(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    Note.findByIdAndDelete({_id:req.body.id})
    .then(result=>{
      if(result){
        res.send('note deleted seccessfully')
      }
      else{
        res.send('note not found');
      }
    })

}



module.exports={getnotes,addnotes,updateuser,deleteuser}