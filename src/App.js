import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import { Home, Login } from './pages';

const App = () => (
  <>
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  </>
);

export default App;
