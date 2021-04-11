import './../styles/Street.css'

import { useState } from 'react';

import Hoverable from './../shared/Hoverable.js';
import FwdButton from '../shared/FwdButton.js';
import BckButton from '../shared/BckButton.js';

import red_triangle from './../assets/red_triangle.svg';
import street_image from './../assets/street.svg'

const garden_text = 'The gardens bring much needed green spaces to urban living, increasing the quality of life for the residents. Native plants would be the focus of these gardens, as these species have been displaced by the city.';
const sidewalk_text = 'The streets are converted to widened sidewalks, allowing for pedestrians to walk to their local shops instead of driving. The lack of cars in this area creates increased safety for pedestrian and biking commuters. Air and noise pollution will see a marked decrease as well.';
const bee_text = 'It is well known that the increase of urban sprawl has decreased the bee population significantly due to the lack of green spaces. This BeeBox would bring the bees back to the cities and to these communities to foster the growth of the native plant species.';
const market_text = 'Markets and everyday essentials will be located within these BeeBlocks. Biking and walking will be viable options to reach these destinations, reducing the need for cars thus improving air quality.';
const shade_text = 'A projected increase in global temperature will require new methods of cooling down the city. A shaded canopy over a part of the complex would reduce the solar impact on city temperatures and improve walkability for pedestrians within the BeeBlocks.';

const default_text = 'Hover over an arrow to learn more about the advantages of living inside of a BeeBlock!'

function Street(props) {
    const [currentText, setCurrentText] = useState(default_text);
    return(
        <div className='main-street'>
            <div className="img-wrapper">
                <Hoverable src={red_triangle} className='hover hover-garden' setCurrentText={setCurrentText} text={garden_text} defaultText={default_text} />
                <Hoverable src={red_triangle} className='hover hover-sidewalk' setCurrentText={setCurrentText} text={sidewalk_text} defaultText={default_text} />
                <Hoverable src={red_triangle} className='hover hover-bee' setCurrentText={setCurrentText} text={bee_text} defaultText={default_text} />
                <Hoverable src={red_triangle} className='hover hover-market' setCurrentText={setCurrentText} text={market_text} defaultText={default_text} />
                <Hoverable src={red_triangle} className='hover hover-shade' setCurrentText={setCurrentText} text={shade_text} defaultText={default_text} />
                <img className="street_image" src={street_image}/>
            </div>
            <div className='header-text'><b>A nice stroll through your BeeBlock</b></div>
            <div className="info-text">{currentText}</div>
            
            <div className="button-container">
                <BckButton destination={props.prevPath} />
                <FwdButton destination={props.nextPath} />
            </div>
        </div>
    );
}

export default Street;