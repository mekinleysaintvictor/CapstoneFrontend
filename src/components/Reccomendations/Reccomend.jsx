import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import reactDom from 'react-dom';
import axios from 'axios';
import './Reccomend.css';

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
            <div id="rekt" className="conatiner">
                <div className="row">
                    <div className="col-sm-3">
                        <div id="rect" >
                            <h1>Reccomended for You!</h1>
                        </div>
                        <table id="customers">
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
                            {musicians.filter(el => el.genres.match(user1.genres) || el.influences.match(user1.influences) || el.instruments.match(user1.instruments)).map(item => (
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
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Reccomend;