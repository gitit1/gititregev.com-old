import React from 'react';
import './AboutMe.scss';

class AboutMe extends React.Component {
    render() {
        return (
            <div className='about-me d-flex justify-content-center'>
                <div className='box-title'>
                    <p>About Me</p>
                </div>
                <div className='box-info'>
                    <div className='box-shaddow'>
                        <p>In 3 words: eager to learn.
                        <br/>And in a few more words...
                        <br/>I'm a workaholic, full of passion to learn and develop in the web development field.
                        <br/>My head is swimming with ideas for apps to develop and i'm looking for a way to accomplish them all.
                        <br/>I think that for every problem there is a solution, you just need to know how to look for it in google.
                        </p>
                    </div>
                </div>
            </div>
        )
    };
}
export default AboutMe;
