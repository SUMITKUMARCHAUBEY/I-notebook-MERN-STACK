import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";

export default function AddNote() {


const context=useContext(noteContext)
const {addNote,showAlert}=context;
const [note,setNote]=useState({title:"",desc:"",tag:""})
const handleonChange=(e)=>{
 setNote({...note,[e.target.name]:e.target.value})
 
}
const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.desc,note.tag);
    setNote({title:"",desc:"",tag:""})
    showAlert("Note added Successfully!!","success")
    // console.log(note.title,note.desc,note.tag);
}

  return (
    
    <div>
      <form id="myform">
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text" name="title" id="title" value={note.title}
              className="form-control border border-black"
              onChange={handleonChange}
              aria-describedby="emailHelp"
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Tag
            </label>
            <input
              type="text" name="tag" id="tag" value={note.tag}
              className="form-control border border-black"
              onChange={handleonChange}
              aria-describedby="emailHelp"
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Describe
            </label>
            <textarea
              type="text" name="desc" id="desc" value={note.desc}
              className="form-control border border-black"
              onChange={handleonChange} 
            />
          </div>
          
          <button
            type="submit" onClick={handleClick} disabled={note.title.length<2||note.desc.length<5||note.tag.length<2}
            className="btn btn-primary border-1 bg-success border-black"        
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
