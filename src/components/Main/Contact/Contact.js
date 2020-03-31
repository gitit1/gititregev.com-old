import React from 'react';
import Working from '../../../assets/images/working/working2.jpg'

function Contact() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>I'm Working on it...</h1>
      <div>
        <img src={Working} alt="Working on It"/>
      </div>
    </div>
  );
}

export default Contact;
