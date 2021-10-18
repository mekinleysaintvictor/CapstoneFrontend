import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import reactDom from 'react-dom';
import axios from 'axios';

const Reccomend = ( { user1 } ) => {
    const [musicians, setMusicians] = useState([]);      //All our musicians


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/musicians/all/")
            .then((response) => {
                setMusicians(response.data);
                console.log("Recked",response.data);
        })
    }, [])

    return ( 
        <React.Fragment>
            <div>
                <table id="" >
                <thead>
                    <tr>
                        <th>About Me</th>
                        <th>Genres</th>
                        <th>Influences</th>
                        <th>Instruments</th>
                        <th>Click Me!</th>
                    </tr>
                </thead>
                <tbody>
                    {musicians.filter(el => el.genres.toLowerCase().indexOf(user1.genres)).map(item => (
                        <tr>                               
                            <td>{item.aboutMe}</td>
                            <td>{item.genres}</td>
                            <td>{item.influences}</td>
                            <td>{item.instruments}</td>  
                            <Link to={`/page/${item.id}`}>Details</Link>                           
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </React.Fragment>
     );
}
 
export default Reccomend;