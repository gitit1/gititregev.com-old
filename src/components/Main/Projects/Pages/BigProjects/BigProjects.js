import React, { Component } from 'react';
import './BigProjects.scss';
import TriPick from './projects/TriPick'
import MFL from './projects/MFL'

class BigProjects extends Component {
  render() {
    return (
      <>
        <MFL />
        <hr/>
        <TriPick />
      </>
    );
  }
}

export default BigProjects;
