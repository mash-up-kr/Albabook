import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Home, Main, About } from './domains';

// import Header from '../components/Header';


const App = () => (
  <div className="App">
    <div className="App-Content" />
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/main">Main</Link>
      </li>
      <li>
        <Link to="/about/test">About</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/about/:name" component={About} />
    </Switch>
  </div>

);

export default App;
