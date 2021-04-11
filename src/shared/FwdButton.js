import { Link } from 'react-router-dom';

import './../styles/Buttons.css'

function FwdButton(props) {
    return(
        <Link to={props.destination}><div className="forward control-button" /></Link>
    )
}

export default FwdButton;