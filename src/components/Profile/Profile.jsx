import React, { useState, useEffect } from "react";
import VideoPlayer from "../MusicVideo/MusicVideo";
import axios from 'axios';

const ProfilePage = (props) => {

    const [user, setUser] = useState({});
    const [userProfile, setUserProfile] = useState({}); //contains, aboutMe, genres, influences, instruments

    useEffect(() => {
        getUserProfile();
    }, []);

    useEffect(() => {
        getUser();
    }, []);

    async function getUserProfile(){
        const jwt = localStorage.getItem("token");
        const response = await axios.get('http://127.0.0.1:8000/api/musicians/', { headers: {Authorization: 'Bearer ' + jwt}});
        console.log("GetuserProfile", response.data[0]);
        setUserProfile(response.data[0]);
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
        <div className="title-bar">
            <body>
                <div>
                    <h1> {user.first_name} Page </h1>
                </div>
                <div>
                    <h2> About me {userProfile.aboutme} </h2>
                </div>
                <div>
                    <h2> Genres I like! {userProfile.genres} </h2>
                </div>
                <div>
                    <h2> Instrments I play {userProfile.instruments} </h2>
                </div>
                <div>
                    <h2> My influences {userProfile.influences} </h2>
                </div>
            </body>
            <div>
                <VideoPlayer/>
            </div>            
        </div>        
    )
}

export default ProfilePage;