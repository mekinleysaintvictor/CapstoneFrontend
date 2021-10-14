import React, { useState, useEffect } from "react";
import axios from 'axios';

const ProfilePage = () => {

    const [user, setUser] = useState({});
    const [userProfile, setUserProfile] = useState({}); //contains aboutMe, genres, influences, instruments

    useEffect(() => {
        getUserProfile();
    }, []);

    useEffect(() => {
        getUser();
    }, []);

    async function getUserProfile(){
        const jwt = localStorage.getItem("token");
        const response = await axios.get('http://127.0.0.1:8000/api/musicians/', { headers: {Authorization: 'Bearer ' + jwt}});
        console.log("GetuserProfile", response.data);
        setUserProfile(response.data);
    }

    async function getUser(){
        const jwt = localStorage.getItem("token");
        const response = await axios.get('http://127.0.0.1:8000/api/musicians/user/', { headers: {Authorization: 'Bearer ' + jwt}});
        console.log("Getuser", response.data);
        setUser(response.data);
    }

    

    // Make the api to get the user object from the database (send the jwt to the protected endpoint)

    return(
        <div className="title-bar">
            <body>
                <div>
                    <h1> {userProfile.username} Page </h1>
                </div>
                <div>
                    <h2> {userProfile.aboutme} </h2>
                </div>
                <div>
                    <h2> {userProfile.genres} </h2>
                </div>
                <div>
                    <h2> {userProfile.instruments} </h2>
                </div>
                <div>
                    <h2> {userProfile.influences} </h2>
                </div>
            </body>
        </div>
    )
}

export default ProfilePage;