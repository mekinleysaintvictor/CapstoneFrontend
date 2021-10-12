import React from 'react';
import { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import RegisterForm from './components/Register/Register';
import { Route, Switch } from 'react-router';

function App() {


  
  return (
    <div className="App">
      <div>
        <TitleBar/>
        <Switch>
          <Route path="/register" component={RegisterForm} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
