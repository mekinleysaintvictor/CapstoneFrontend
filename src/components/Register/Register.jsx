import React from "react";
import useForm from "../CustomForm/CustomForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const RegisterForm = () => {
    const { formValues, handleChange, handleSubmit } = useForm(register);
    const history = useHistory();

    function register(){
        registerUser();
    }
    
    async function registerUser(){
        try{
            let response = await axios.post("http://127.0.0.1:8000/api/auth/register/", formValues);
            console.log("Response data: ", response);
            alert(`Thanks for registering ${formValues.username}!`);
            window.location = '/login';
        }
        catch{
            alert("Invalid info.");
            console.log("Unsuccess");
        }
    }

    const handleRoute = () => {
        history.push("/login");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <div>
                            <input type='text' name='username' onChange={handleChange} value={formValues.username} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <div>
                            <input type='password' name='password' onChange={handleChange} value={formValues.password} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Confirm Password:
                        <div>
                            <input type='password' name='password2' onChange={handleChange} value={formValues.password2} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <div>
                            <input type='email' name='email' onChange={handleChange} value={formValues.email} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        First Name:
                        <div>
                            <input type='text' name='first_name' onChange={handleChange} value={formValues.first_name} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <div>
                            <input type='text' name='last_name' onChange={handleChange} value={formValues.last_name} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <div>
                        <button type="submit" className="btn">Register</button>
                    </div>
                </div>
                <div>
                    <button className="btn" onClick={handleRoute}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;