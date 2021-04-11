import './../styles/Street.css'

import { useState } from 'react';

import Hoverable from './../shared/Hoverable.js';
import FwdButton from '../shared/FwdButton.js';
import BckButton from '../shared/BckButton.js';

import red_triangle from './../assets/red_triangle.svg';

const planter_text = 'This is a planter for plants';
const default_text = 'This is the default text'

function Street(props) {
    const [currentText, setCurrentText] = useState(default_text);
    return(
        <div className='main-street'>
            <div className="infro-text">{currentText}</div>
            <Hoverable src={red_triangle} className='hover-planter' setCurrentText={setCurrentText} text={planter_text} defaultText={default_text} />
            <div className="button-container">
                <BckButton destination={props.prevPath} />
                <FwdButton destination={props.nextPath} />
            </div>
        </div>
    );
}

export default Street;