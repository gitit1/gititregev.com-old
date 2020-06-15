import React, { Component } from 'react';
import './Resume.scss';
import WorkExperience from './components/WorkExperience/WorkExperience';
import AboutMe from './components/AboutMe/AboutMe';
import Educaion from './components/Educaion/Educaion';
import MyResume from '../../../assets/pdf/resume-gitit-regev.docx';
// import Skills from './components/Skills/Skills';
import Languages from './components/Languages/Languages';

class Resume extends Component {

  render() {

    return (
      <div className='resume'>
        <p className='r-header'>Resume</p>
        <p>You can go for&nbsp; 
          <a href="https://www.linkedin.com/in/gitit-regev-aa6a4961/" target="_blank" rel="noopener noreferrer">Linkedin</a> for my full resume or&nbsp; 
          <a href={MyResume}>download it here</a></p>
        <hr className='hr-ext'/>
        <div className="d-flex justify-content-center">
          <div className='left-section'>
            <AboutMe />
            <hr className='hr-int'/>
            <WorkExperience />
            <hr className='hr-int'/>
            <Educaion />
          </div>
          <div className='right-section'>
            {/* <Skills /> */}
            <Languages />
          </div>
        </div>
      </div>


    );
  }
}
export default Resume;