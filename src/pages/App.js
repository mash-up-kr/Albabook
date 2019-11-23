import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Main } from './domains';

// import Header from '../components/Header';


const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/main" component={Main} />

    {/* <Header /> */}
  </Switch>
);

export default App;
