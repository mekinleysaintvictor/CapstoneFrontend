import React from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import RegisterForm from './components/Register/Register';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import Logout from './components/Logout/Logout';
import axios from 'axios';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';
import jwtDecode from 'jwt-decode';
import { Component } from 'react';
import ProfilePage from './components/Profile/Profile';

class App extends Component {
  state = { }

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try{

      const user = jwtDecode(jwt);
      console.log("JWT", jwt);   
      this.setState({ user });

    }catch{

      const refreshToken = localStorage.getItem("refreshToken");
      let response = axios.post("http://127.0.0.1:8000/api/auth/login/refresh", refreshToken);
      console.log("Refresh", response);
      const user = jwtDecode(response);
      this.setState( { user });
    }
  }

  
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
              <Route path="/search" component={Search}/>
              <Route path="/" exact component={HomePage}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
