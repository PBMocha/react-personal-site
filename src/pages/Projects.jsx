import React, { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';

const ProjectsPage = ({id}) => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        //use service
        setProjects([
            {
                title: 'Personal Site', 
                gitlink: 'https://github.com/PBMocha/react-personal-site', 
                description: 'A personal website showcasing my experiences, projects and journey. The website was created using only the javascript react framework and bootstrap.'
            }, 
            {
                title: 'Project TBA', 
                gitlink: 'TBA', 
                description: 'TBA'
            }, 
        ]);
    }, []);

    return (  
        <div id={id} className="container">
            <div className="row">
                <div className="col-sm m-5 d-flex justify-content-center">
                <h2>Projects</h2>
                </div>
            </div>
            <hr></hr>
            <ProjectList projects={projects}/>
            <hr></hr>
        </div>);
    
}
 
export default ProjectsPage;