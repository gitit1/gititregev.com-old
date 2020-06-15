import React from 'react';
// import './Skills.scss';

class Languages extends React.Component {
    render() {
        return (
            <div className='languages'>
                <p className='title'>Technologies</p>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>Node JavaScript ecosystem</li>
                    <li>PHP</li>
                    <li>MongoDB</li>
                    {/* <li>WordPress</li> */}
                </ul>
            </div>
        )
    };
}
export default Languages;
