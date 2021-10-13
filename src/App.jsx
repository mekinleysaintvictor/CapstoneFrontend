import React from 'react';
import { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import RegisterForm from './components/Register/Register';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import { Redirect } from 'react-router-dom';
import { Route, Switch, useHistory } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import Logout from './components/Logout/Logout';
import Profile from './components/Profile/Profile';
import jwtDecode from 'jwt-decode';
import { Component } from 'react';
import ProfilePage from './components/Profile/Profile';

class App extends Component {
  state = { }

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    // const response = await axios.get(`http://127.0.0.1:8000/api/examples/user`, { headers: {Authorization: 'Bearer ' + jwt}});
    try{
      const user = jwtDecode(jwt);
      console.log("JWT: ", jwt);    
      this.setState({
        user
      });
    }catch{

    }
  }


  // const[isAuthenticated, setIsAuthenticated] = useState(null);

  // useEffect(() => {
  //   const jwt = localStorage.getItem("token");
  //   try{
  //     setIsAuthenticated(jwt);
  //   }catch{

  //   }
  // },
  // [])

  
  
  render() {
    const user = this.state.user;
    return (
      <div className="App">
        <div>
          <TitleBar/>
          <NavBar user={user}/>
          <div>
            <Switch>
              <Route path="/profile" render={props => {
                if(!user){
                  return <Redirect to="/login"/>
                } else {
                  return <ProfilePage {...props} user={user}/>
                }
              }}       
              />           
              <Route path="/register" component={RegisterForm}/>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route path="/" exact component={HomePage}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
