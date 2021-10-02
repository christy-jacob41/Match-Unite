import React, {useState} from "react";
import './Navbar.css';
import logo from "../header_logo.png"
function Navbar() {
  const [navOpen, setnavOpen] = useState(false);

  return (
    <nav class="navbar">
      <div class="nav_logo" onClick = {()=>setnavOpen(!navOpen)}>
        <img classname = "logo-img"src ={logo}/>
      </div>
      <ul class = "nav_list" style={{transform:navOpen?"translatex(0px)":""}}>
        <li class = "nav_links"><a>Search</a></li>
        <li class = "nav_links"><a>Profile</a></li>
        <li class = "nav_links"><a>Social</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
