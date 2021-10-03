import React from 'react';
import Navbar from './Navbar'
import '../App.css';
import ProgressBar from '../croppedProgressionBar.jpeg';
import Kbbq from "../FlaggedKbbqImg.png";
import lantFest from "../lanternFestival.png";
import squidGame from "../SquidGameImg.png";
import portrait from "../myPortrait2.png";


const Profile = (props) => {
return (
    <div>
        <Navbar></Navbar>

    <div id="belowNavbar">

    <section id="home" className="headerArea">
        <div class="navigation fixed-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="index.html">
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div> 

        <div id="parallax" class="header-content d-flex align-items-center">
            <div class="container">
                <div class="col-lg-7 offset-xl-0">
                    <div class="header-shape shape-one layer">
                        <img src={portrait} alt="JohnSmith"/>
                    <div class="col-xl-100 col-lg-0">
                        <div class="header-content-center">
                            <h2 className="JohnSmith">John Smith</h2>
                        </div> 
                    </div>
                </div> 
            </div> 
            </div>
        </div> 
    </section>

        <div class="profile">
        <div class="loader_34">
            <div class="ytp-spinner">
                <div class="ytp-spinner-container">
                    <div class="ytp-spinner-rotator">
                        <div class="ytp-spinner-left">
                            <div class="ytp-spinner-circle"></div>
                        </div>
                        <div class="ytp-spinner-right">
                            <div class="ytp-spinner-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section id="about" class="about-area pt-125 pb-130">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-">
                    <div class="section-title text-center">
                        <h2 class="title">My Rating</h2>
                        <p>★★★★☆  Average 4 stars (23 reviews)</p>
                        <div class="header-shape shape">
                            <img src={ProgressBar} alt="ProgressionBar"/>
                        </div> 
                    </div>
                </div> 
            </div>
        </div> 
        <div class = "container">
            <div class = "row justify-content-left">
                <div class = "col-lg-50">
                    <div class="about-content mt-50">
                        <p>"KBBQ"                    ★★★★☆</p>
                        <p>"Chinese Lantern Making"  ★★★★☆</p>
                        <p>"Camping"                 ★★★☆☆</p>
                        <p>"Pool Party"              ★★★★☆</p>
                        <p>"Glass Painting"          ★★★★★</p>
                        <p>"Bake Sale"               ★★★★☆</p>
                        <p>"Friendly Hackathon"      ★★★★☆</p>
                    </div> 
                </div>
            </div>
        </div>
    </section>

    <section id="areas" class="work-area pt-125 pb-130">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div id = "ActivityArea" class="section-title pb-25">
                        <h2 class="title">Activity Log</h2>
                        <p>est ultricies eros, ac porta sem turpis quis leo.</p>
                    </div> 
                </div>
            </div> 
            <div className="PictureArea">
            <div class="row">
                <div class="">
                    <div class="">
                        <div class="">
                            <img src={Kbbq} alt="work"/>
                        </div>
                        <div class="">
                            <div class="">
                                <h3 class="">KBBQ</h3>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="">
                    <div class="">
                        <div class="">
                            <img src={lantFest} alt="work"/>
                        </div>
                        <div class="">
                            <div class="">
                                <h3 class="">Lantern Festival</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="">
                        <div class="">
                            <img src={squidGame} alt="work"/>
                        </div>
                        <div class="work-overlay">
                            <div class="work-content">
                                <h3 class="work-title">Product Design</h3>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
            </div>
        </div>
    </section>


    </div>
    </div>
  )
};

export default Profile;