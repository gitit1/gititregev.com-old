import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

render((
    <BrowserRouter>
        <div className="index">
          <div className="header">
            <Header />
          </div>
          <div className="menu">
            <Main />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>       
    </BrowserRouter>
), document.getElementById('root'));
