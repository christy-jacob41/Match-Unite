import React, {useState} from "react";
import './Navbar.css';
import logo from "../header_logo.png"
import icon from "../usericon.png"
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';

function Navbar() {
  const [navOpen, setnavOpen] = useState(false);

  function changeColorWhite(e) {
    e.target.style.textDecoration = 'underline';
  }

   function changeColorBlack(e) {
    e.target.style.textDecoration = 'none';
  }

  return (
    <nav class="navbar">
      <div class="nav_logo" onClick = {()=>setnavOpen(!navOpen)}>
        <Link to="/search" ><img classname = "logo-img"src ={logo}/></Link>
      </div>
      <ul class = "nav_list" style={{transform:navOpen?"translatex(0px)":""}}>
        <li class = "nav_links"><Link to="/search" style={{textDecoration: 'inherit', color:'black'}} onMouseOver={changeColorWhite} onMouseOut={changeColorBlack} ><a>Search</a></Link></li>
        <li class = "nav_links"><Link to="/profile" style={{textDecoration: 'none', color:'black'}} onMouseOver={changeColorWhite} onMouseOut={changeColorBlack}><a>Profile</a></Link></li>
        <li class = "nav_links"><Link to="/social" style={{textDecoration: 'none', color:'black'}} onMouseOver={changeColorWhite} onMouseOut={changeColorBlack}><a>Social</a></Link></li>
        <li class = "nav_links"><Popup trigger = {<img className = "icon-img"src ={icon}/>} position="bottom">
          <div>
            <h4 className="AccountOptions">Your Account</h4>
            <h4 className="AccountOptions">Subscriptions</h4>
            <h4 className="AccountOptions">Privacy Settings</h4>
            <h4 className="AccountOptions">Logout</h4>
          </div>
          
          </Popup> </li>
      </ul>
    </nav>
  );
}

export default Navbar;