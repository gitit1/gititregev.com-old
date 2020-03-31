import React from 'react';
import './Home.scss'
import ImageMe from '../../../assets/images/home_image.jpg';
import ImageInigo from '../../../assets/images/hello.gif';

class Home extends React.Component {
    render() {
        return ( 
            <div className="home d-flex justify-content-center align-items-center">
                <img src={ImageMe}
                    onMouseOver={e => e.currentTarget.src = ImageInigo}
                    onMouseOut={e => e.currentTarget.src = ImageMe}
                    alt="Gitit Regev"
                    className="image"
                />
                <div className="text">
                    <div className="paragraphs">
                        <p className="p-hello">Hello,</p>
                        <p className="p-name">My name is <span>Gitit Regev</span>,</p>
                        <p className="p-website">You Have Reached My Website,</p>
                        <p className="p-for">Prepare For:</p>
                    </div>
                    <div className="links">
                        <a className="a-resume" href="">My Resume</a>
                        <a className="a-projects" href="">My Projects</a>
                        <a className="a-crazy" href="">My Crazyness</a>
                    </div>
                </div>
            </div>
        )
    };
}
export default Home;
