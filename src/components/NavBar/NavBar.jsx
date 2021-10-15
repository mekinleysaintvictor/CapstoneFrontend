import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {




    return (
        <div>
            {user && <h4> Welcome {user.username}</h4>}
            <div>
                <ul>
                    <div>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </div>
                    <div>
                        <li>
                        <Link to="/profile">Profile</Link> 
                        </li>
                    </div>
                    {!user && 
                        <React.Fragment>
                            <div>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </div>
                        </React.Fragment>
                    }
                    {user &&
                        <React.Fragment>
                            <div>
                                <li>
                                    <Link to="/logout">Logout</Link>                                    
                                </li>
                            </div>
                            <div>
                                <li>
                                    <Link to="/search">Search</Link>
                                </li>
                            </div>
                        </React.Fragment>
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavBar;