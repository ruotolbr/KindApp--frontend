import React from 'react'
import "../App.css"
import {Nav} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom"
import Profile from './Profile'
import { useHistory } from "react-router-dom";



function NavBar() {

  const history = useHistory();

  const homePage = () =>{
    history.push('/home')
  }
  const myKindPosts = () =>{
    history.push('/post/create/')
  }
  const profile = () =>{
    history.push('/profile')
  }
  
    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link onClick={homePage} className="nav-link active" path="/">Home</Link>
        <Link onClick={myKindPosts} className="nav-link active" aria-current="page" path="/post/create">MyKindPosts</Link>
        <Link onClick={pageChange} className="nav-link active" path="/profile">Profile</Link>
        
      </div>
      
    </div>
  </div>
</Nav>

      
    );
  }
  
  export default NavBar;