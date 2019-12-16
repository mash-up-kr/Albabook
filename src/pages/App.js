import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home, Main, About, Test,
} from './domains';

// import Header from '../components/Header';


const App = () => (
  <div className="App">
    <div className="App-Content" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/about/:name" component={About} />
      <Route exact path="/test" component={Test} />

    </Switch>
  </div>

);

export default App;
