import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function FooterBootstrap () {


    return(    
            <Navbar fixed='bottom' bg="dark" variant ="dark">
                <Container fluid>
                    <Navbar.Text className="justify-content-center">
                        Created by: MeKinley Saint Victor
                    </Navbar.Text>                  
                    <Navbar.Text className="justify-content-end">
                        © 2021 Copyright
                    </Navbar.Text>                  
                </Container>
            </Navbar>     
    )
}

export default FooterBootstrap;