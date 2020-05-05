import React from 'react';
import ExperienceTable from '../components/ExperienceTable'

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            experiences: [],
            skills: [],
        };
        //this.setExperiences = this.setExperiences.bind(this);
    }

    componentDidMount() {
        this.setExperiences();
    }

    setExperiences() {
        let education = this.getEducation();
        let _experiences = [];

        _experiences.push(education[0]);
        _experiences.push(education[1]);
        
        this.setState({
            experiences: _experiences
        }, () => console.log(this.state));
    }

    getEducation() {

        let educList = []
        const university = {
            title: 'Concordia University',
            role: 'Bachelor of Computer Science',
            year: '2017 - 2021 (expected)',
            location: 'Montreal, QC',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper dolor convallis, congue lacus in, malesuada enim.'+
            'Fusce lobortis metus eu urna semper, vel pharetra ipsum feugiat. Nulla suscipit tortor lectus, tristique blandit nunc mollis vel.' + 
            'Pellentesque non massa nec urna sodales convallis. Morbi varius ultricies placerat.'
        };

        const highschool = {
            title: 'Blessed Cardinal Newman Highschool',
            role: 'Ontario Highschool Diploma',
            year: '2013 - 2017',
            location: 'Toronto, ON',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper dolor convallis, congue lacus in, malesuada enim.'+
            'Fusce lobortis metus eu urna semper, vel pharetra ipsum feugiat. Nulla suscipit tortor lectus, tristique blandit nunc mollis vel.' + 
            'Pellentesque non massa nec urna sodales convallis. Morbi varius ultricies placerat.'
        };

        educList.push(university);
        educList.push(highschool);
        
        return educList;
        
    }

    getProfessional() {
        let workList = [];

        return workList;
    }

    render() { 

        const experience_list = this.state.experiences;
        //console.log(experience_list);
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm m-5 d-flex justify-content-center">
                    <h2>Experience</h2>
                    </div>
                    <hr></hr>
                </div>
                <ExperienceTable experiences={experience_list}/>
                <hr></hr>

            </div>);
    }
}
 
export default Experience;