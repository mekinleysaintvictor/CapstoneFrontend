import React, {useState, useEffect} from "react";
import axios from 'axios';

const Search = () => {
    const [musicians, setMusicians] = useState([]);                                     //[APIData, setAPIData]
    const [filteredMusicians, setFilteredMusicians] = useState([]);                     //[filteredResults]
    const [searchInput, setSearchInput] = useState('');                                 //[searchInput, setSearchInput]

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/musicians/all/")
            .then((response) => {
                setMusicians(response.data);
                console.log(response);
        })
    }, [])

    // const searchItems = (searchValue) => {
    //     setSearchInput(searchValue);
    //     console.log(searchValue);
    //     musicians.filter((item) => {
    //         return Object.values(item).join('').toLowerCase.includes(searchInput.toLowerCase());
    //     })
    //     setFilteredMusicians(filteredData);
    // }

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

    // const filteredData = musicians.filter((item) => {
    //     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
    // })

    return(
        <React.Fragment>
            <div>
                <input placeholder="Search..." onChange={(e) => searchItems(e.target.value)}/>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>About Me</th>
                        <th>Genres</th>
                        <th>Influences</th>
                        <th>Instruments</th>
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
