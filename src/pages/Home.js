import React from 'react';
import {
    BrowserRouter as Router,
    Link
    } from "react-router-dom";

import './../styles/Home.css'
import './../styles/index.css'

import triangle from './../assets/triangle.svg'
import lacoast from './../assets/lacoast.svg'

function Home() {
    return(
        <div className="home-main">
            
            <div className = "wrapper"> 
            <div className = "wrapper2"/>
            <img src={lacoast} className="background" /> 
            </div>
            
            <div className="home-title"><p>BeeBlocks</p></div>
            <div className="home-explanation-text">
            In general, Superblocks are a new way to structure housing and commerce in cities that reclaims space for the public in densely populated areas. Smaller streets are repurposed from driving lanes to community spaces. 
Our version of the Superblock, the BeeBlock, places an emphasis on the community garden as a way to improve the residents’ qualities of life. 
<br></br><br></br>Click on the triangle to zoom in on a sample BeeBlock and learn more!

            </div>
            <Link to="/superblock" className="superblock-btn">
                <img src={triangle} className="triangle-btn" />
            </Link>
        </div>
    );
}

export default Home;