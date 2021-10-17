import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const Musician = (props) => {

    const [musician, setMusician] = useState([]);
    const[otherUser, setOtherUser] = useState([]);
    const { id } = useParams();

    useEffect(async() => {
        await axios.get(`http://127.0.0.1:8000/api/musicians/${id}/`)
        .then((res) => {
            setMusician(res.data[0]);
            console.log("Musician",res.data);
        })
        .catch((err) => console.log(err))
        console.log("Error:")
    }, []);

    useEffect(() => {
        getUserName();
    }, [musician]);

    async function getUserName(){
        try{
        const response = await axios.get(`http://127.0.0.1:8000/api/musicians/${musician.user_id}/user/`);
        setOtherUser(response.data[0]);
        console.log("Other User:", response.data[0]);
        }catch{

        }
    }

    return(
        <React.Fragment>
            <div>
            <div class="container">
                    <div className="row"></div>
                    <div class="row justify-content-between">
                        <div class="col-4">
                        <div className="card text-white bg-dark mb-3">
                                <div className="card-header">Welcome to {otherUser.username}'s Profile</div>
                                <div className="card-body">
                                    <h5 class="card-title">About Me</h5>
                                    <p class="card-text">
                                        Instruments I Play: {musician.instruments}
                                        </p>
                                    <p>
                                        My influences: {musician.influences}
                                    </p>
                                    <p>
                                        Genres I like: {musician.genres}
                                    </p>
                                    <p>
                                        Quick Bio: {musician.aboutMe}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div className="">
                            {musician.video == 'None' || null ? (                                                                                       
                                    <h1>This User Does Not Have A Video Posted Yet!</h1>                                 
                                ):(                       
                                    <div className="right floated">
                                        <iframe class="embed-responsive-item" id="ytplayer" type="text/html" width="640" height="360"
                                            src={`https://www.youtube.com/embed/${musician.video}/`}
                                            frameBorder="0">
                                        </iframe>
                                    </div> 
                            )}
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </React.Fragment>        
    )
}

export default Musician;