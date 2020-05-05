import React from 'react';
import ProjectList from '../components/ProjectList';

class ProjectsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projectList: [],
        };
    }

    componentDidMount() {
        this.setProjectList();
    }

    //Used fo adding projects i have done in the past
    //If more projects are made, change this function
    setProjectList() {
        
        //Add projects to this list
        const projectList = 
        [
            {
                title: 'Personal Site', 
                gitlink: 'TBA', 
                description: 'A personal website showcasing my experiences, projects and journey. The website was created using only the javascript react framework and bootstrap.'
            }, 
            {
                title: 'Project TBA', 
                gitlink: 'TBA', 
                description: 'TBA'
            }, 
        ];

        this.setState({
            projectList: projectList,
        }, console.log(this.state));
    }

    render() { 
        return (  
            <div class="container">
                <div class="row">
                    <div class="col-sm m-5 d-flex justify-content-center">
                    <h2>Projects</h2>
                    </div>
                </div>
                <hr></hr>
                <ProjectList projects={this.state.projectList}/>
                <hr></hr>
            </div>);
    }
}
 
export default ProjectsPage;