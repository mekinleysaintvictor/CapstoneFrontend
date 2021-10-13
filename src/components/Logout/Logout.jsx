import React from "react";

const Logout = () => {

    async function logoutUser(){
        localStorage.removeItem("token");
    }

    return (
        <div>
            <button onClick={logoutUser}>LogoutComp</button>
        </div>
    )
}

export default Logout;