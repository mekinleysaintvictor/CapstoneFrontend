import React, { Component, useState, useEffect } from "react";
import reactDom from "react-dom";
import axios from 'axios';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Profile.css';
import Reccomend from "../Reccomendations/Reccomend";
import BandRequest from "../BandRequest/BandRequest";

const ProfilePage = () => {

    const [user, setUser] = useState({});
    const [userProfile, setUserProfile] = useState({}); //contains, aboutMe, genres, influences, instruments


    useEffect(() => {
        getUserProfile();
    }, []);

    useEffect(() => {
        getUser();
    }, []);



    async function getUserProfile(){
        const refresh = localStorage.getItem("refreshToken");
        console.log("Refresh:", refresh);   
        const response = await axios.post("http://127.0.0.1:8000/api/auth/login/refresh/", {refresh: refresh});
        const jwt = (response.data.access);
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/musicians/', { headers: {Authorization: 'Bearer ' + jwt}});
            console.log("GetuserProfile", response.data[0]);
            setUserProfile(response.data[0]);
        }catch{

        }
    }

    async function getUser(){
        const refresh = localStorage.getItem("refreshToken");
        console.log("Refresh:", refresh);   
        const response = await axios.post("http://127.0.0.1:8000/api/auth/login/refresh/", {refresh: refresh});
        const jwt = (response.data.access);
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/musicians/user/', { headers: {Authorization: 'Bearer ' + jwt}});
            console.log("Getuser:", response.data[0]);
            setUser(response.data[0]);
        }catch{
      
        }        
    }

   

    // Make the api to get the user object from the database (send the jwt to the protected endpoint)

    return(
        <React.Fragment>
                <div className="container">
                    <div className="row"></div>
                    <div className="row justify-content-between">
                        <div className="col-4">
                        <div className="card text-white bg-dark mb-3">
                                <div className="card-header">Welcome to {user.first_name}'s Profile</div>
                                <div className="card-body">
                                    <h5 className="card-title">About Me</h5>
                                    <p className="card-text">
                                        Instruments I Play: {userProfile.instruments}
                                        </p>
                                    <p>
                                        My influences: {userProfile.influences}
                                    </p>
                                    <p>
                                        Genres I like: {userProfile.genres}
                                    </p>
                                    <p>
                                        Quick Bio: {userProfile.aboutMe}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="">
                            {userProfile.video == 'None' || null ? (                                                                                       
                                    <Nav.Link as={Link} to="/editprofile"><h1>Post A Video!</h1></Nav.Link>                                   
                                ):(                       
                                    <div className="right floated">
                                        <iframe className="embed-responsive-item" id="ytplayer" type="text/html" width="640" height="360"
                                            src={`https://www.youtube.com/embed/${userProfile.video}/`}
                                            frameBorder="0">
                                        </iframe>
                                        <h1>Check out my video!</h1>
                                    </div>                                   
                            )}
                            </div>
                        </div>
                        <div id="cloud" className="row">
                            <div className="col-4 ">
                                {userProfile.soundCloud == 'None' || null ? (
                                    <Nav.Link as={Link} to="/editprofile"><h1>Post A Soundcloud Track here!</h1></Nav.Link>
                                ):(
                                    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                                        src={`https://w.soundcloud.com/player/?url=${user.soundCloud}&amp;`}>
                                    </iframe>
                                )}                               
                            </div>
                        </div>
                    </div>
                </div>
            <Reccomend user1={userProfile}></Reccomend>
            <BandRequest/>
        </React.Fragment>                
    )
}

export default ProfilePage;