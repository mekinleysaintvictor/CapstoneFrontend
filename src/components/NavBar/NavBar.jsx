import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {


    return (
        <Navbar bg="dark" variant ="dark">
            <Navbar.Brand>Mushroom Mood</Navbar.Brand>
            <Container fluid className="justify-content-end">
            {user && <h1> </h1>}                                       
                    <Nav className="">                                   
                        <Nav.Link as={Link} to="/">Home</Nav.Link>                                                                   
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    </Nav>                         
                    {!user && 
                            <Nav className="">                                
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>                                                                
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>                               
                            </Nav>                      
                    }
                    {user &&                       
                            <Nav className="">                                
                                <Nav.Link as={Link} to="/editprofile">Edit Profile</Nav.Link>                                                                    
                                                          
                                <Nav.Link as={Link} to="/search">Search</Nav.Link>                                
                                                                                               
                                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>                                
                            </Nav>                        
                    }            
                
            </Container>
        </Navbar>
    )
}

export default NavBar;