import React, { useState , useContext} from "react";
import { useNavigate } from 'react-router-dom';
import noteContext from "../Context/notes/noteContext";


export default function Signup() {
  const navigate=useNavigate();
  
  const context=useContext(noteContext)
  const {showAlert}=context;

  const handleSubmit=async(e)=>{
      e.preventDefault();
      
      const response=await fetch("http://localhost:5000/user/signup",{
          method:'POST',
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({name:body.name,email:body.email,pass:body.pass})
      });
      const json= await response.json()
      if(json.success){
        showAlert("Login Successfull!!","success")
        navigate("/");
      }
      else{
        showAlert("Wrong Cradencials","warning")

      }
    }
  
  const [body,setBody]=useState({name:"",email:"",pass:""})
  const onchange=(e)=>{
    setBody({...body,[e.target.name]:e.target.value})

  }
  
  return (
    <div className='container mt-5 bg bg-dark p-5 text-primary rounded'>
    <h2>Sign up</h2>
    <form onSubmit={handleSubmit}>
<div className="mb-3 ">
  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
  <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" value={body.name} onChange={onchange}/>
  
</div>
<div className="mb-3 ">
  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="email" name='email' value={body.email} aria-describedby="emailHelp" onChange={onchange}/>
  <div id="emailHelp" className="form-text text-primary">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
  <input type="password" className="form-control" id="pass" name='pass' value={body.pass} onChange={onchange}/>
</div>

<button type="submit" className="btn btn-primary">Signup</button>
</form>
  </div>
  )
}
