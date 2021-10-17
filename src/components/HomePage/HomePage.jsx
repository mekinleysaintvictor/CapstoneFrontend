import React from "react";
import shroom from '../images/mushroom2.jpg';
import './HomePage.css';

function HomePage () {


    return(
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-md-center align-items-center">
                    <div className="col col-4">
                        <h1> Mushroom </h1>
                    </div>
                    <div className="col col-md-auto">
                        <img clasName="img" src={shroom}></img>
                    </div>
                    <div className="col col-4">
                        <div className="pull-right">
                            <h1> Mood </h1>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePage;