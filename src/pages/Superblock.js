import './../styles/Superblock.css';

import { useState } from 'react';

import Hoverable from './../shared/Hoverable.js';
import FwdButton from '../shared/FwdButton.js';
import BckButton from '../shared/BckButton.js';

import red_triangle from './../assets/red_triangle.svg';

const default_text = 'Hover over one of the areas on the map to learn more about how superblocks can utilize space more efficiently and reduce traffic congestion!'
const grocer_text = 'This is the grocer. Not  grocery s that would be harder to type'
const outer_road_text = 'IDK man i cant right'


function Superblock(props) {
    const [currentText, setCurrentText] = useState(default_text);
    return(
        <div className="main-superblock">
            <div className="info-text">{currentText}</div>
            <Hoverable src={red_triangle} className='hover-grocer' setCurrentText={setCurrentText} text={grocer_text} defaultText={default_text} />
            <Hoverable src={red_triangle} className='hover-outer-roads' setCurrentText={setCurrentText} text={outer_road_text} defaultText={default_text} />
            <div className="button-container">
                <BckButton destination={props.prevPath} />
                <FwdButton destination={props.nextPath} />
            </div>
        </div>
    );
}

export default Superblock;