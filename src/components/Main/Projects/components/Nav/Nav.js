import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav(props) {
  return (
      <nav className="nav-p justify-content-center">
        <button  
          type="button"
          className="link-button" 
          onClick={() => props.onClick(0)}>Big Projects</button>
        <button  
          type="button"
          className="link-button" 
          onClick={() => props.onClick(1)}>Mini Projects</button>
      </nav>
  );
}

export default Nav;
