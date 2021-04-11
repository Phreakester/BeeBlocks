import './../styles/Superblock.css';

import background from './../assets/superblock.svg';

function Superblock() {
    return(
        <div className="main-superblock">
            <img src={background} alt="Workplace" useMap="#workmap" />
            <map name="workmap">
                <area className="grocer-hover" shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm" />
                <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" />
                <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm" />
            </map>
        </div>
    );
}

export default Superblock;