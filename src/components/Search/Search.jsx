import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import FontAwesome from "react-fontawesome";

const Search = () => {
    const [musicians, setMusicians] = useState([]);                                     //[APIData, setAPIData]
    const [filteredMusicians, setFilteredMusicians] = useState([]);                     //[filteredResults]
    const [searchInput, setSearchInput] = useState('');     
    const history = useHistory();                            //[searchInput, setSearchInput]

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/musicians/all/")
            .then((response) => {
                setMusicians(response.data);
                console.log(response);
        })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput !== '') {
            const filteredData = musicians.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput);
            })
            setFilteredMusicians(filteredData);
        }
        else{
            setFilteredMusicians(musicians);
        }
    }

    const handleRoute = () => {
        history.push(`/page:id/`);
    }

    return(
        <React.Fragment>
            <div>
                <input placeholder="Search..." onChange={(e) => searchItems(e.target.value)}/>
                <i className="fa fa-search"></i>
            </div>
            <table className="table text-white table-bordered">
                <thead className="text-black">
                    <tr>
                        <th>About Me</th>
                        <th>Genres</th>
                        <th>Influences</th>
                        <th>Instruments</th>
                        <th>Click Me!</th>
                    </tr>
                </thead>
                <tbody>
                    {searchInput.length > 1 ? (
                        filteredMusicians.map((item) => {
                            return (
                                <tr>                               
                                    <td>{item.aboutMe}</td>
                                    <td>{item.genres}</td>
                                    <td>{item.influences}</td>
                                    <td>{item.instruments}</td>  
                                    <Link to={`/page/${item.id}`}>Details</Link>                           
                                </tr>
                            )
                        })
                    ) : (
                        musicians.map((item) => {
                            return (
                                <tr>                           
                                    <td>{item.aboutMe}</td>
                                    <td>{item.genres}</td>
                                    <td>{item.influences}</td>
                                    <td>{item.instruments}</td>
                                    <Link to={`/page/${item.id}`}>Details</Link>                            
                                </tr> 
                            )
                        })
                    )}
                </tbody>
            </table>
        </React.Fragment> 
    )
}

export default Search;
