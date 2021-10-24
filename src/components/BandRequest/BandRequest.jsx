import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import reactDom from 'react-dom';
import axios from 'axios';

const BandRequest = () => {
   
    const [user, setUser] = useState({});
    const [userProfile, setUserProfile] = useState({}); //contains, aboutMe, genres, influences, instruments
    const [requests, setRequests] = useState([]);
    const [filteredRequests, setFilteredRequests] = useState([]);  //requests.receiver
    const [musicians, setMusicians] = useState([]);       //all profiles
    const [detailsPage, setDetailsPage] = useState([]);  //friend requests profile page info


    useEffect(() => {
        getUserProfile();
    }, []);

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        getRequests();
    }, [userProfile]);

    useEffect(() => {
        filtering();
    }, [requests]);

    useEffect(() => {
        filteringDetails();
    },[requests]);


    console.log("Requests", requests);
    console.log("Requests filtered out:", filteredRequests);
    console.log("Profiles All:", musicians);
    console.log("Detail profile from requests", detailsPage);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/musicians/all/")
            .then((response) => {
                setMusicians(response.data);
                console.log(response);
        })
    }, [])


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

    async function getRequests() {
        const response = await axios.get("http://127.0.0.1:8000/api/musicians/all/requests/");
        setRequests(response.data);
    }

    
    const filtering = () => { 
        const filtering = requests.filter(item => 
            item.receiver === userProfile.user_id
        );
        setFilteredRequests(filtering);
    }

    const filteringDetails = () => { 
        const filtering = musicians.filter((item) => 
            filteredRequests.find(({sender}) => item.user_id === sender)
        );
        setDetailsPage(filtering);
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
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Friend Request</th>
                                <th>Click Me!</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detailsPage.map(item => (
                                <tr>                               
                                    <td>{item.aboutMe}</td>  
                                    <Link to={`/page/${item.id}`}>Details</Link>                           
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>            
        </React.Fragment>
    );
}
 
export default BandRequest;