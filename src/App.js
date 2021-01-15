import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import Issues from './pages/IssuePage';
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Issues}/>
              <Route exact path='/home' component={Issues}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
