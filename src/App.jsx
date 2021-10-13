import React from 'react';
import { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import RegisterForm from './components/Register/Register';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import { Redirect } from 'react-router-dom';
import { Route, Switch, useHistory } from 'react-router';

function App() {

  const[isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    try{
      setIsAuthenticated(jwt);
    }catch{

    }
  },
  [])

  console.log(isAuthenticated);
  
  return (
    <div className="App">
      <div>
        <TitleBar/>
        <Switch>
          {/* <Route path="/"
            if()
          /> */}
          
          <Route path="/register" component={RegisterForm}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
