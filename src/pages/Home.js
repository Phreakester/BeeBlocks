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
            <div className="home-title"><b>Bee Blocks</b></div>
            <div className="home-explanation-text">
                Heyo! I am not good at the pen scribble for words and I am too lazy to lorem ipsum it so here is some placeholder text, yum.
                But anyways, supa blocks are supa cool so we should, like, use them and stuff
            </div>
            <Link to="/superblock" className="superblock-btn">
                <img src={triangle} className="triangle-btn" />
            </Link>
        </div>
    );
}

export default Home;