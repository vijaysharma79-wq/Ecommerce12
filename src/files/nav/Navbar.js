import React from 'react'
// import Api from './Api';
import "./nav.css";
import { Link } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';




const Navbar = ({ size, vijay, sethide,setApidata,Api }) => {

  return (
   
    <>
    <nav className="navbar navbar-expand-lg bg-body-dark  " >
  <div className="container-fluid">
    <Link  className="navbar-brand " id='nnn' to="/"  onClick={() =>( sethide
              (true),setApidata(Api))}>Tribble </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-lg-">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" onClick={() =>( sethide
              (true),setApidata(Api))}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to="/About">About</Link>
        </li>
       

        <li className="nav-item">
          <Link className="nav-link" to="/Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cart">Cart<sup>{size}</sup></Link>
          
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(Event)=>vijay(Event.target.value.toLowerCase(),sethide(false))}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar;

//////////////////////////////////

