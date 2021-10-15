import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const Musician = () => {

    const [musician, setMusician] = useState([]);
    const { id } = useParams();
    
    useEffect(async() => {
        await axios.get(`http://127.0.0.1:8000/api/musicians/${id}/`)
        .then((res) => {
            setMusician(res.data[0]);
            console.log(res.data);
        })
        .catch((err) => console.log(err))
        console.log("Error:")
    }, []);

    return(
        <React.Fragment>
            <div>
                
            </div>
            <div>
                <tr>
                    <div>
                        <td>About me: {musician.aboutMe}</td>
                        <td>Instruments: {musician.instruments}</td>
                        <td>Influences: {musician.influences}</td>
                        <td>Genres: {musician.genres}</td>
                    </div>
                </tr>
            </div>
        </React.Fragment>        
    )
}

export default Musician;