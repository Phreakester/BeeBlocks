import './../styles/Superblock.css';

import { useState } from 'react';

import Hoverable from './../shared/Hoverable.js';

import background from './../assets/superblock.svg';
import red_triangle from './../assets/red_triangle.svg';

const default_text = 'Hover over one of the areas on the map to learn more about how superblocks can utilize space more efficiently and reduce traffic congestion!'
const grocer_text = 'This is the grocer. Not  grocery s that would be harder to type'


function Superblock() {
    const [currentText, setCurrentText] = useState(default_text);
    return(
        <div className="main-superblock">
            <div>{currentText}</div>
            <Hoverable src={red_triangle} className='hover-grocer' setCurrentText={setCurrentText} text={grocer_text} defaultText={default_text} />
        </div>
    );
}

export default Superblock;