import React from 'react'
import "../App.css"
import {Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom"
import {Profile} from './Profile'



function NavBar() {

  
    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <Link className="nav-link" path="/myposts">MyKindPosts</Link>
        <Link className="nav-link" path="/profile">Profile</Link>
      </div>
      
    </div>
  </div>
</Nav>

      
    );
  }
  
  export default NavBar;