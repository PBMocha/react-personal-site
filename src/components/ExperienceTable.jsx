import React, {useState, useEffect} from 'react';

function ExperienceTable (props) {

    //Allows local state in the function
    const [experiences, setExperiences] = useState([]);

    //Basically the same as componentDidMount
    useEffect(() => {
        function handleExperList(list) {
            setExperiences(list);
        }

        handleExperList(props.experiences);
    }, [experiences]);

    return (
        <div>
        { experiences.map((obj) => {
            return ( 
            <div class="row justify-content-sm-center">
                <div class="col-sm-5 p-4 m-2">
                    <h4>{obj.title}</h4>
                    <h5>{obj.location}</h5>
                    <h5>{obj.year}</h5>
                </div>
                <div class="col-sm-5 p-4 m-2">
                    <h4>{obj.role}</h4>
                    <p>{obj.description}</p>
                </div>
            </div>
            );
        })}
        </div>
    );
}

export default ExperienceTable;