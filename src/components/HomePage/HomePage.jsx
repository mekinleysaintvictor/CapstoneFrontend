import React from "react";
import shroom from '../images/mushroom2.jpg';
import './HomePage.css';

function HomePage () {


    return(
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-md-center text-center">
                    <div className="col col-6">
                        <h2>Find your musical match today</h2>
                    </div>
                </div>
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
                <figure class="text-center">
                    <blockquote class="blockquote text-white">
                        <p>"Bach made me dedicate my life to music, and it was a teacher who introuduced me to his world."</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Nina Simone in <cite title="Source Title">I Put a Spell On You</cite>
                    </figcaption>
                </figure>
            </div>
        </React.Fragment>
    )
}

export default HomePage;