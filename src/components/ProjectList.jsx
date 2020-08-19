import React, { useState, useEffect }  from 'react';

function ProjectList(props) {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        function handleProjectList(obj) {
            setProjects(obj);
        }
        handleProjectList(props.projects);
    });

    return (
        <div>
        {projects.map((obj, index) => {
            return (
            <div key={index} className="row justify-content-sm-center">
                <div className="col-sm-5 p-4 m-2">
                    <h4>{obj.title}</h4>
                    <a href={obj.gitlink}>Github Link</a>
                </div>
                <div className="col-sm-5 p-4 m-2">
                    <h4>Description</h4>
                    {obj.description}
                </div>
            </div>
            );
        })}
        </div>
    );
    

}

export default ProjectList;