import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
      <nav className="nav justify-content-center">
        <Link className="nav-link active" to="/">Home</Link>
        <Link className="nav-link" to="/resume">Resume</Link>
        <Link className="nav-link" to="/projects">Projects</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </nav>
  );
}

export default Header;
