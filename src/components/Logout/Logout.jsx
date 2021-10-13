import React from "react";

const Logout = () => {

    async function logoutUser(){
        localStorage.removeItem("token");
        window.location = '/';
    }

    return (
        <div>
            <button onClick={logoutUser}>LogoutComp</button>
        </div>
    )
}

export default Logout;