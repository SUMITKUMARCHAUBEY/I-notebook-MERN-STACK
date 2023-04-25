import React, { useState , useContext} from "react";
import { useNavigate } from 'react-router-dom';
import noteContext from "../Context/notes/noteContext";



export default function Login() {
  const context=useContext(noteContext)
  const {showAlert}=context;

  const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        const response=await fetch("http://localhost:5000/user/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:body.email,pass:body.pass})
        });
        const json= await response.json()
        if(json.success===true)
        {
          localStorage.setItem('token',json.data);
          
          showAlert("Login Successfull!!","success")
          navigate("/");
        }
        else{
          showAlert("Wrong Cradencials","warning")

        }
        // console.log(json);
    }
    
    const [body,setBody]=useState({email:"",pass:""})
    const onchange=(e)=>{
      setBody({...body,[e.target.name]:e.target.value})

    }
    

  return (
    <div className="container mt-5 bg bg-dark p-5 text-primary rounded">
       <h2>Login</h2>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email" name="email"
            aria-describedby="emailHelp" value={body.email} onChange={onchange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="pass"
            className="form-control"
            id="pass" value={body.pass} onChange={onchange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
