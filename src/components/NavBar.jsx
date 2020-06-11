import React from 'react';
import '../App.css';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Experiences from '../pages/Experiences';

const Navigation = () => {
    return (
        <Router>
        {/* <div class="container"> */}
            <nav class="navbar navbar-expand-sm navbar-light mw-75 bg-dark">
                <div class="navbar-collapse" id="navbar">
                    <ul class="nav m-auto">
                        <li class="nav-item mr-4 ml-4">
                            <Link className="nav-link text-light" to='/'>About<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item mr-4 ml-4">
                            <Link className="nav-link text-light" to='/projects'>Projects<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item mr-4 ml-4">
                            <Link className="nav-link text-light" to='/experiences'>Experiences<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item mr-4 ml-4">
                            <Link className="nav-link text-light" to='/contact'>Contact<span class="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <About />
            <Projects />
            <Experiences />
            <Contact />
        {/* </div> */}
        {/* <div class="container"> */}
            {/* <Switch>
                
                <Route path='/projects'>
                    <Projects />
                </Route>
                <Route path='/experiences'>
                    <Experiences />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/'>
                    <About />
                </Route>
            </Switch> */}
        {/* </div> */}
        </Router>
    );
};

export default Navigation;