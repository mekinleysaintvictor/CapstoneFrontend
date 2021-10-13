import React from "react";

const Logout = () => {

    async function logoutUser(){
        localStorage.removeItem("token");
    }

    return (
        <div>

        </div>
    )
}

export default Logout;