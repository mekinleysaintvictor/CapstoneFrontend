import React from "react";
import Logout from "../Logout/Logout";

function TitleBar () {

    async function logoutUser(){
        localStorage.removeItem("token");
    }

    return(
        <div className="title-bar">
            <body>
                <div>
                    <h1> Mushroom Mood </h1>
                    <button onClick={logoutUser}>Logout</button>
                </div>
            </body>
        </div>
    )
}

export default TitleBar;