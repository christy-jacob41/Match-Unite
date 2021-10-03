import React from 'react';
import Navbar from './Navbar'
import SocialPage from './SocialPage'
import '../App.css';

const Social = (props) => {
return (

    <div>
        <Navbar></Navbar>
        <SocialPage className="socialSection"></SocialPage>
    </div>
    

  )
};

export default Social;