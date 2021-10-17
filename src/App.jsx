import React from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import RegisterForm from './components/Register/Register';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import Logout from './components/Logout/Logout';
import Search from './components/Search/Search';
import jwtDecode from 'jwt-decode';
import { Component } from 'react';
import ProfilePage from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import Musician from './components/Musician/Musician';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import FooterBootstrap from './components/FooterBootstrap/FooterBootstrap';
import './App.css';


class App extends Component {
  state = { }

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try{

      const user = jwtDecode(jwt);
      console.log("JWT", jwt);   
      this.setState({ user });

    }catch{

    }
  }

  
  render() {
    const user = this.state.user;
    return (
      <div className="App">
        <div>
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
              <Route path="/editprofile" render={props => {
                if(!user){
                  return <Redirect to="/login"/>
                } else {
                  return <EditProfile {...props} user={user}/>
                }
              }}       
              />           
              <Route path="/register" component={RegisterForm}/>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route path="/search" component={Search}/>
              <Route path="/page/:id" component={Musician}/>
              <Route path="/" exact component={HomePage}/>
            </Switch>
            <FooterBootstrap/>
          </div>          
        </div>
      </div>
    );
  }
}

export default App;
