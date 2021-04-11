import './../styles/Superblock.css';

import { useState } from 'react';

import Hoverable from './../shared/Hoverable.js';
import FwdButton from '../shared/FwdButton.js';
import BckButton from '../shared/BckButton.js';

import red_triangle from './../assets/red_triangle.svg';
import super_image from './../assets/superblock.svg';

const default_text = 'Hover over one of the areas on the map to learn more about how BeeBlocks can utilize space more efficiently and reduce traffic congestion!'
const inner_road_text = 'The lanes originally used for driving are converted into a community space. Between the buildings, walkable pathways will be constructed, encouraging pedestrians.'
const outer_road_text = 'Traffic is directed around the perimeter of the BeeBlocks, decreasing the level of noise pollution within the complex.'
const bus_text = 'Public transit is located on the outside streets surrounding the BeeBlocks. These bus stops are strategically placed along the edge of each superblock, making public transportation an efficient and accessible option for residents.'
const housing_text = 'To compensate for the increase in population, additional housing spaces will be constructed on the roofs of existing buildings. Increasing the population density increases the need for community spaces, hence the transformation of the community into a BeeBlock.'


function Superblock(props) {
    const [currentText, setCurrentText] = useState(default_text);
    return(
        <div className="main-superblock">
            <div className="img-wrapper">
                <Hoverable src={red_triangle} className='hover-inner-road' setCurrentText={setCurrentText} text={inner_road_text} defaultText={default_text} />
                <Hoverable src={red_triangle} className='hover-outer-road' setCurrentText={setCurrentText} text={outer_road_text} defaultText={default_text} />
                <Hoverable src={red_triangle} className='hover-bus' setCurrentText={setCurrentText} text={bus_text} defaultText={default_text} />
                <Hoverable src={red_triangle} className='hover-housing' setCurrentText={setCurrentText} text={housing_text} defaultText={default_text} />
                <img className="super_image" src={super_image}/>
            </div>
            <div className='header-text'><b>Welcome to your new BeeBlock!</b></div>
            <div className="info-text">{currentText}</div>
            
            <div className="button-container">
                <BckButton destination={props.prevPath} />
                <FwdButton destination={props.nextPath} />
            </div>
        </div>
    );
}

export default Superblock;