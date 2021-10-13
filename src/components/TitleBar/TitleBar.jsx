import React from "react";
import Logout from "../Logout/Logout";

function TitleBar () {

    async function logoutUser(){
        localStorage.removeItem("token");
        window.location = '/';
    }

    return(
        <div className="title-bar">
            <body>
                <div>
                    <h1> Mushroom Mood </h1>
                    <button className="btn" onClick={logoutUser}>Logout</button>
                </div>
            </body>
        </div>
    )
}

export default TitleBar;