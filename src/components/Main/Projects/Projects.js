import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import './Projects.scss';
import BigProjects from './Pages/BigProjects/BigProjects';
import MiniProjects from './Pages/MiniProjects/MiniProjects';
class Projects extends Component {
  state = {
    showPage: 0
  }

  getPage = (index) => {
    console.log('getPage:',index)
    this.setState({ showPage: index });
  }

  showPage = () => {
    switch (this.state.showPage) {
      case 0:
        return <BigProjects />
      case 1:
        return <MiniProjects />
      default:
        return <BigProjects />
    }
  }
  render() {
    return (
      <div className="d-flex flex-column align-items-center projects">
        <p className='p-header'>Projects</p>
        <Nav onClick={(index) => this.getPage(index)}></Nav>
        <hr className='hr-ext' />
        {this.showPage()}
      </div>
    );
  }
}
export default Projects;
