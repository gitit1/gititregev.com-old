import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function Main() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  );
}

export default Main;
