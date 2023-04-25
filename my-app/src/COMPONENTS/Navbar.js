import React, { useContext } from "react";
import{Link,useLocation,useNavigate} from "react-router-dom"

import noteContext from "../Context/notes/noteContext";

export default function Navbar() {

  const context=useContext(noteContext)
  const { showAlert }=context;

  const navigate=useNavigate();
  let location=useLocation();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate("/login")
    showAlert("Loged Out, Successfully!!","success")
  }
  return (
    <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand text-info" to="/"><h2>I-Notebook</h2></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
               {localStorage.getItem('token') && <Link className={`nav-link ${location.pathname==="/"?"text-info":"active text-success"}`} aria-current="page" to="/">Home</Link>}
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"text-info":" active text-success"}`} to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/link"?"text-info ":"active text-success"}`} to="/link">Link</Link>
                </li>
            </ul>
               { localStorage.getItem('token')?<button className='btn btn-success m-2' onClick={handleLogout}>Log Out</button>:<div className="d-flex mx-3">
                  <Link className='btn btn-success mx-2' to="login">Login</Link>
                  <Link className='btn btn-success mx-2' to="signup">Sign up</Link>
                </div>
                }
            </div>
        </div>
        </nav>
    </div>
  )
}
