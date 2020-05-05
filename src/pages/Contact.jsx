import React from 'react';
import '../App.css'


class Contact extends React.Component {

    render() { 
        return (
            <div class="container">
                <div class="row">
                        <div class="col-sm m-5 d-flex justify-content-center">
                        <h2>Contact</h2>
                        
                        </div>
                </div>
                <div class="row">
                    <div class="col-sm p-4 m-2 p-content">
                        <br />
                        <address>
                            <span class="material-icons">mail</span>joshuabrandonpb@gmail.com<br /><br />
                            <span>Github: <a href="https://github.com/PBMocha">https://github.com/PBMocha</a></span><br /><br />
                            <span>LinkedIn: <a href="https://www.linkedin.com/in/joshua-parial-bolusan">https://www.linkedin.com/in/joshua-parial-bolusan</a></span><br />
                        </address>
                    </div>
                </div>
            </div>
            );
    }
    
}
 
export default Contact;