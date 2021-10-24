import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import reactDom from 'react-dom';
import axios from 'axios';

const BandRequest = () => {
   
    const [user, setUser] = useState({});
    const [userProfile, setUserProfile] = useState({}); //contains, aboutMe, genres, influences, instruments
    const [requests, setRequests] = useState([]);
    const [filteredRequests, setFilteredRequests] = useState([]);


    useEffect(() => {
        getUserProfile();
    }, []);

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        filtering();
    }, [requests]);

    console.log("Requests", requests);
    console.log("Requests filtered out:", filteredRequests);

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

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/musicians/all/requests/")
            .then((response) => {
                setRequests(response.data);
                console.log("Requests",response.data);
        })
    }, [userProfile]);

    
    const filtering = () => { 
        const filtering = requests.filter(item => 
            item.receiver === userProfile.user_id
        );
        setFilteredRequests(filtering);
    }


    // const filtering = () => { 
    //     if(requests.receiver == userProfile.user_id){
    //         const filteredData = requests.filter((item) => {
    //             return Object.values(item);
    //         })
    //         setFilteredRequests(filteredData);
    //     }
    // }
    
    return ( 
        <React.Fragment>
                        <table id="customers">
                        <thead>
                            <tr>
                                <th>Friend Request</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.filter(el => el.receiver === userProfile.user_id).map(item => (
                                <tr>                               
                                    <td>{item.username}</td>  
                                    <Link to={`/page/${item.sender}`}>Details</Link>                           
                                </tr>
                            ))}
                        </tbody>
                        </table>
        </React.Fragment>
     );
}
 
export default BandRequest;