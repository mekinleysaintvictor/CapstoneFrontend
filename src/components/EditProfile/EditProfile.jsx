import React from "react";
import useForm from "../CustomForm/CustomForm";
import axios from "axios";
import jwtDecode from 'jwt-decode'; //added here for invalid token specified
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const EditProfile = () => {
    const { formValues, handleChange, handleSubmit } = useForm(edit);
    const history = useHistory();

    function edit(){
        editProfile();
    }
    
    async function editProfile(){
        const refresh = localStorage.getItem("refreshToken");
        console.log("Refresh:", refresh);   
        const response = await axios.post("http://127.0.0.1:8000/api/auth/login/refresh/", {refresh: refresh});
        const jwt = (response.data.access);
        try{
            let response = await axios.put("http://127.0.0.1:8000/api/musicians/", formValues, { headers: {Authorization: 'Bearer ' + jwt}});
            console.log("Response data: ", response);
            alert(`Profile has been updated!`);
            window.location = '/';
        }
        catch{
            alert("Invalid info.");
            console.log("Unsuccess");
        }
    }

    const handleRoute = () => {
        history.push("/profile");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        About Me:
                        <div>
                            <input type='text' name='aboutMe' onChange={handleChange} value={formValues.aboutMe} required={false}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Instruments:
                        <div>
                            <input type='text' name='instruments' onChange={handleChange} value={formValues.instruments} required={false}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Influences:
                        <div>
                            <input type='text' name='influences' onChange={handleChange} value={formValues.influences} required={false}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Genres:
                        <div>
                            <input type='text' name='genres' onChange={handleChange} value={formValues.genres} required={false}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <div>
                        <button type="submit" className="btn">Save</button>
                    </div>
                </div>
                <div>
                    <button className="btn" onClick={handleRoute}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile;