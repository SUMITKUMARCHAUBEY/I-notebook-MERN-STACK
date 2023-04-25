import React, { useState } from "react";
import noteContext from "./noteContext";

export default function NoteState (props) {
   const Initialnotes=[];
   const root="http://localhost:5000"
   
   const getnotes=async()=>{
   const url=`${root}/inote/getNotes`
   const response=await fetch(url,{
    method:"GET",
    headers:{
      "content-Type":"application/json",
    'inotelogin':localStorage.getItem('token')}
   })
   const json=await response.json();
   
   setNotes(json)
  }
  const [notes,setNotes]=useState(Initialnotes)
//add note
const addNote=async(title,desc,tag)=>{
  // console.log(title,desc,tag);
  const url=`${root}/inote/addNote`
   await fetch(url,{
    method:"POST",
    headers:{
      "content-Type":"application/json",
    'inotelogin':localStorage.getItem('token')}
      ,
      body:JSON.stringify({
        
        "title":title,
        "desc":desc,
        "tag":tag
      })

  })
   getnotes();
 
}
//delete note
const deleteNote=async(id)=>{
  const url=`${root}/inote/deleteNote`
   await fetch(url,{
    method:"DELETE",
    headers:{
      "content-Type":"application/json",
    'inotelogin':localStorage.getItem('token')}
      ,
      body:JSON.stringify({
        "id":id,
      })
  })  
  getnotes();
}
//edit note
const editNote=async(id,title,tag,desc)=>{
  const url=`${root}/inote/updateNote`
  await fetch(url,{
   method:"PUT",
   headers:{
     "content-Type":"application/json",
   'inotelogin':localStorage.getItem('token')}
     ,
     body:JSON.stringify({
      "id":id,
      "title":title,
      "desc":desc,
      "tag":tag
     })
 })  
 getnotes();
  
}

const[alert,setalert]=useState()
const showAlert=(msg,type)=>{
  setalert({mes:msg,typ:type});
  setTimeout(()=>{
    setalert(null);
  },1500)

}

    return(
        <noteContext.Provider value={{notes,addNote,getnotes,setNotes,deleteNote,editNote,alert,showAlert}}>
            {props.children}
        </noteContext.Provider>
    )

}