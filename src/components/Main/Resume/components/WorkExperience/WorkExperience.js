import React from 'react';
import './WorkExperience.scss';
import Apester from '../../../../../assets/images/resume-page/apester-logo.png'
import Webcollage from '../../../../../assets/images/resume-page/webcollage.png'

class WorkExperience extends React.Component {
    render() {
        return (
            <div className='work-experience d-flex justify-content-center'>
                <div className='box-title'>
                    <p>Work Experience</p>
                </div>
                <div className='box-info'>
                    <div className='box-shaddow'>
                        <span className="company-info">
                            <img src={Apester} alt="Apester" />
                            <p><span>Full Stack Developer</span> at <a href="http://apester.com/" rel="noopener noreferrer" >Apester</a></p>
                        </span>
                        <p><b>October ​2019 - Present</b></p>
                        <div>
                            <p>Apester is a participatory data provider that allows businesses and publishers to learn more about their audiences.
                            <br />I'm part of the RnD of the company, developing our Products , Editor and Sites.
                            <br />I'm working with React, TypeScript, JavaScript, AngularJS.</p>
                        </div>

                    </div>
                    <br />
                    <div className='box-shaddow'>
                        <span className="company-info">
                            <img src={Webcollage} alt="Apester" />
                            <p><span>Web Developer</span> at <a href="https://www.syndigo.com/" rel="noopener noreferrer">Webcollage (now Syndigo)</a></p>
                        </span>
                        <p><b>December 2015 - April 2019</b></p>
                        <p>•	Designing, coding and modifying websites using HTML, CSS and JavaScript.
                        <br />•	Designing and developing internal system to generate landing pages system using React.js and NodeJS.
                        <br />•	Created inner tools using JavaScript and Chrome Addons.
                        <br />•	Coding in XSLT and JavaScript over Rhino to standardize product feeds and scrapped data.
                        <br />•	Designing, coding and modifying websites
                        <br />•	Experience developing cross-browser web experience.
                        <br />•	Work closely with account manager, creative team members and other members of the development team to implement high
                                quality web sites while meeting project deliverable and time lines.
                        <br />•	After the company was sold - left with a narrow team to manage and share information with the replacement India team.
                        </p>
                    </div>
                    <br />
                </div>
            </div>
        )
    };
}
export default WorkExperience;
