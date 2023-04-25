
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Navbar from './COMPONENTS/Navbar';
import Home from './COMPONENTS/Home';
import About from './COMPONENTS/About';
import NoteState from './Context/notes/noteState';
import Link from './COMPONENTS/Link';
import Alert from './COMPONENTS/Alert';
import Login from './COMPONENTS/Login';
import Signup from './COMPONENTS/Signup';
function App() {

  return (
    <div style={{height:"100vh"}}>
    <Router>
<NoteState>
    

        <div >
      <Navbar/>
      <Alert msg="This is alert" type="danger"/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/link' element={<Link/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
        </div>
     
</NoteState>
    </Router>
    </div>
  );
}

export default App;
