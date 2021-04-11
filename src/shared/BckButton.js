import { Link } from 'react-router-dom';

import './../styles/Buttons.css'

function BckButton(props) {
    return(
        <Link to={props.destination}><div className="back control-button" /></Link>
    );
}

export default BckButton;