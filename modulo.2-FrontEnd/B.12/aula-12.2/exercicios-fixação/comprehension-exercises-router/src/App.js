import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" 
          render={(greetingsMessage) => <Users { ...greetingsMessage} greetingsMessage={'Good Morning'} />} 
          />
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
          <Route exact path='/strict-acess' component={ StrictAccess } />
        </Switch>
        <div>
          <Link to="/">Home</Link><br />
          <Link to='/about'>About</Link><br />
          <Link to='/users'>Users</Link><br />
          <Link to='/strict-access'>Strict Access</Link> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
