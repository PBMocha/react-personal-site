import React, { useEffect, useState} from 'react';
import { Link, animateScroll as scroll} from 'react-scroll';

import '../App.css';

const Navigation = () => {

    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        
    }

    return (
        <div>
        {/* <div class="container"> */}
            <nav className="navbar navbar-expand-sm navbar-light mw-75 bg-dark">
                <div className="navbar-collapse" id="navbar">
                    <ul className="nav m-auto">
                        <li className="nav-item mr-4 ml-4">
                            <a className="nav-link text-light" href='#'>About</a>
                        </li>
                        <li className="nav-item mr-4 ml-4">
                            <Link className="nav-link text-light" activeClass="" to="projects" spy={true} smooth={true} offset={0} duration={1000}>Projects</Link>
                        </li>
                        <li className="nav-item mr-4 ml-4">
                            <Link className="nav-link text-light" activeClass="" to="experiences" spy={true} smooth={true} offset={0} duration={1000}>Experience</Link>
                        </li>
                        <li className="nav-item mr-4 ml-4">
                            <Link className="nav-link text-light" activeClass="" to="contact" spy={true} smooth={true} offset={-70} duration={1000}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
      </div>
    );
};

export default Navigation;