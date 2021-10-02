import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Social from './pages/Social';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Navigation from './Navigation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/social" component={Social} />
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
