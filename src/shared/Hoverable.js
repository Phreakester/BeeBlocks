function Hoverable(props) {
    return(
        <img src={props.src} className={props.className} onMouseEnter={() => props.setCurrentText(props.text)} onMouseLeave={() => props.setCurrentText(props.defaultText)} />
    );
}

export default Hoverable;