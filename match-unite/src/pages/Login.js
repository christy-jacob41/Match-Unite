import React from 'react';
import '../App.css';
import Logo from '../2 1.png'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Login() {

  function changeBackgroundHover(e) {
    e.target.style.background = 'black';
    e.target.style.color = 'white';
    e.target.style.transform = 'translate(-5px, -5px)';
  }

  function changeBackgroundLeave(e) {
    e.target.style.background = 'white'
    e.target.style.color = '#1674bc';
    e.target.style.transform = 'translate(5px, 5px)';
  }


  return (
      <body className="LoginPage">
          <img className="Logo" src={Logo}/>
          <Link to="/search">
          <Button className="LoginButton" block
   style={{backgroundColor: 'white', fontWeight: 'bold', color: '#1674bc', borderRadius: '100px', textAlign: 'Center', width: '40vw', marginTop: '15px', height: '10vh', fontSize: '5vh'}} 
   onMouseEnter={changeBackgroundHover} onMouseLeave={changeBackgroundLeave}>Login</Button>{' '}
        </Link>
     </body>
  );
}

export default Login;
