import './../styles/Outro.css'
import './../styles/Buttons.css'

import FwdButton from '../shared/FwdButton.js';
import BckButton from '../shared/BckButton.js';

function Outro(props) {
    return(
        <div className="outrowrapper">
        <div className="main-outro">
            <div className="outro-text">Thank you for taking the time to learn about Bee Blocks!</div>
            <a className='outro-button' target="_blank" rel="noreferrer" href='https://www.youtube.com/watch?v=ZORzsubQA_M'>Learn more about superblocks</a>
            <a className='outro-button' target="_blank" rel="noreferrer" href='https://www.youtube.com/watch?v=SyPjwxHxbus'>Learn more about bees</a>
            <a className='outro-button' target="_blank" rel="noreferrer" href='https://docs.google.com/presentation/d/1yOINC_jJQQV65akMZLFP2bwIvDO9V3kMZJLUqs0RL-0/edit?usp=sharing'>View our presentation Deck</a>
            <a className='outro-button' target="_blank" rel="noreferrer" href='https://github.com/Phreakester/beeblocks'>View our code on GitHub</a>
            
            <div className="button-container">
                <BckButton destination={props.prevPath} />
                {props.nextPath && <FwdButton destination={props.nextPath} />}
            </div>
        </div> 
        </div>
    );
}

export default Outro;