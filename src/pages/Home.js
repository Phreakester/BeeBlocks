import {
    BrowserRouter as Router,
    Link
    } from "react-router-dom";

import './../styles/Home.css'
import './../styles/index.css'

import triangle from './../assets/triangle.svg';
import background from './../assets/LASataliteView.svg';

function Home() {
    return(
        <div className="home-main">
            <div className="home-title"><p>Bee Blocks</p></div>
            <div className="home-explanation-text">
            In general, Superblocks are a new way to structure housing and commerce in cities that reclaims space for the public in densely populated areas. Smaller streets are repurposed from driving lanes to community spaces, and used for a variety of purposes. 
Our version of the Superblock, the BeeBlock, places an emphasis on the community garden as a way to improve the residents’ qualities of life. The problem we are addressing is how the increase in population by the year 2030 will exacerbate the struggles of city living that we see today, including air pollution, noise pollution, heavy traffic, the lack of community space, and the lack of nature.
            </div>
            <Link to="/superblock" className="superblock-btn">
                <img src={triangle} className="triangle-btn" />
            </Link>
        </div>
    );
}

export default Home;