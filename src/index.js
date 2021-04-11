import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ReactDOM from 'react-dom';

import './styles/index.css';

import Home from './pages/Home.js'
import Superblock from './pages/Superblock.js'
import Street from './pages/Street.js'
import Outro from './pages/Outro.js'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/superblock">
          <Superblock nextPath='/street' prevPath='/' />
        </Route>
        <Route path="/street">
          <Street nextPath='/outro' prevPath='/superblock' />
        </Route>
        <Route path="/outro">
          <Outro prevPath='/street'/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
