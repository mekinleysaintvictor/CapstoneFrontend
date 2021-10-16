import React, { useState, useEffect } from "react";
import axios from 'axios';

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
            <div className="title-bar">         
                <div>
                    <h1> Welcome to {user.first_name}'s Profile </h1>
                </div>
                <div>
                    <h2> About me: {userProfile.aboutMe} </h2>
                </div>
                <div>
                    <h2> Genres I like: {userProfile.genres} </h2>
                </div>
                <div>
                    <h2> Instrments I play: {userProfile.instruments} </h2>
                </div>
                <div>
                    <h2> My influences: {userProfile.influences} </h2>
                </div>
            
                <div className="">
                        {userProfile.video == 'None' || null ? (                            
                                    <h1>Post a Video!</h1>                                   
                            ):(                       
                                <div className="right floated">
                                    <iframe class="embed-responsive-item" id="ytplayer" type="text/html" width="640" height="360"
                                        src={`https://www.youtube.com/embed/${userProfile.video}/`}
                                        frameBorder="0">
                                    </iframe>
                                </div> 
                        )}
                </div>                                        
            </div>
        </React.Fragment>                
    )
}

export default ProfilePage;