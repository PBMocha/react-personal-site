import React from 'react';
//import './text/AboutText.jsx.js';

import '../App.css'

const aboutParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." + 
"Etiam ullamcorper dolor convallis, congue lacus in, malesuada enim. Fusce lobortis metus" +
"eu urna semper, vel pharetra ipsum feugiat. Nulla suscipit tortor lectus, tristique blandit nunc mollis vel.";

const About = () => {

    return (
        <div id="about" className="container">
            <div className="jumbotron jumbotron-fluid mt-4 rounded">
                <div className="container">
                    <h1 className="display-4 p-4">Joshua Parial-Bolusan</h1>
                    <hr></hr>
                </div>
            </div>
            
            <div className="row">
                <div className="col-sm p-4 m-3 p-content">
                    <h4>About</h4>
                    <br />
                    <p>
                        {aboutParagraph}
                    </p>
                </div>
                <div className="col-sm p-4 m-3 p-content">
                    <h4>Specifics</h4>
                    <br />
                    <p>
                        <b>Full Name:</b>
                        <br />
                        Joshua Brandon Parial-Bolusan
                        <br />
                        <b>Hobbies:</b>
                        <br />
                        Drumming, Gaming, Computers, Anime and Manga
                        <br />
                        <b>Location:</b>
                        <br />
                        Quebec, Canada
                    </p>
                </div>
                <hr></hr>
            </div>
            
        </div>
    );
}

export default About;