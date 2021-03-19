import React from 'react'
import "../App.css"
import {Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom"
import Profile from './Profile'
import { useHistory } from "react-router-dom";



function NavBar() {

  const history = useHistory();

  const pageChange = () =>{
    
    history.push('/myposts')
    history.push('/profile')
    history.push('/post/create')
    
  }

  
    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="home">Home</a>
        <Link onClick={pageChange} className="nav-link active" aria-current="page" path="/myposts">MyKindPosts</Link>
        <Link onClick={pageChange} className="nav-link active" path="/profile">Profile</Link>
      </div>
      
    </div>
  </div>
</Nav>

      
    );
  }
  
  export default NavBar;