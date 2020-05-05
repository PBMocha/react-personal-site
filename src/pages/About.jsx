import React from 'react';
//import './text/AboutText.jsx.js';

import '../App.css'

const aboutParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." + 
"Etiam ullamcorper dolor convallis, congue lacus in, malesuada enim. Fusce lobortis metus" +
"eu urna semper, vel pharetra ipsum feugiat. Nulla suscipit tortor lectus, tristique blandit nunc mollis vel.";

class About extends React.Component {

    render() {
        return (
                <div class="container">
                    <div class="row row-cols-1">
                        <div class="col-sm m-5 d-flex justify-content-center">
                            <h2>Joshua Parial-Bolusan</h2>
                        </div>
                        <hr></hr>
                    </div>
                    
                    <div class="row">
                        <div class="col-sm p-4 m-2 p-content">
                            <h4>About</h4>
                            <br />
                            <p>
                                {aboutParagraph}
                            </p>
                        </div>
                        <div class="col-sm p-4 m-2 p-content">
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

}

export default About;