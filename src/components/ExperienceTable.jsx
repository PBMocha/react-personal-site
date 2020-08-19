import React, {useState, useEffect} from 'react';

function ExperienceTable ({experienceList}) {

    //Allows local state in the function
    const [experiences, setExperiences] = useState([]);

    //Basically the same as componentDidMount
    useEffect(() => {
        function handleExperList(list) {
            setExperiences(list);
        }

        handleExperList(experienceList);
    }, [experiences]);

    return (
        <div>
        { experiences.map((obj, index) => {
            return ( 
            <div key={index} className="row justify-content-sm-center">
                <div className="col-sm-5 p-4 m-2">
                    <h4>{obj.title}</h4>
                    <h5>{obj.location}</h5>
                    <h5>{obj.year}</h5>
                </div>
                <div className="col-sm-5 p-4 m-2">
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