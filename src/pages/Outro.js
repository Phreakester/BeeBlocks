import './../styles/Outro.css'

import FwdButton from '../shared/FwdButton.js';
import BckButton from '../shared/BckButton.js';

function Outro(props) {
    return(
        <div className="button-container">
            <BckButton destination={props.prevPath} />
            {props.nextPath && <FwdButton destination={props.nextPath} />}
        </div>
    );
}

export default Outro;