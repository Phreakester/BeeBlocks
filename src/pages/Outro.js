import './../styles/Outro.css'
import './../styles/Buttons.css'

import FwdButton from '../shared/FwdButton.js';
import BckButton from '../shared/BckButton.js';

function Outro(props) {
    return(
        <div className="main-outro">
            <div className="outro-text">Bleh Belh thanks for watching</div>
            <a className='outro-button' href='https://www.youtube.com/watch?v=ZORzsubQA_M'>Learn more about superblocks</a>
            <a className='outro-button'>Learn more about bees</a>
            <a className='outro-button'>View our presentation Deck to gain insight as to our creative process</a>
            <a className='outro-button' href='https://github.com/Phreakester/beeblocks'>View our website source code on GitHub</a>
            
            <div className="button-container">
                <BckButton destination={props.prevPath} />
                {props.nextPath && <FwdButton destination={props.nextPath} />}
            </div>
        </div>
    );
}

export default Outro;