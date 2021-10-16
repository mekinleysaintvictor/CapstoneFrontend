import React from "react";
import axios from 'axios';
import useForm from "../CustomForm/CustomForm";
import { useHistory } from "react-router";
import './Login.css';

const LoginForm = () => {
    const { formValues, handleChange, handleSubmit } = useForm(loginUser);
    const history = useHistory();

    async function loginUser(){
        try{
            let response = await axios.post("http://127.0.0.1:8000/api/auth/login/", formValues);
            console.log(response);
            alert("You're logged in!");
            localStorage.setItem("token", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
            window.location = '/';
        }
        catch{
            alert("Username or Password does not match.")
            console.log("Unsuccess");
        }
    }

    const handleRoute = () => {
        history.push("/register");
    }

    return (
        <div div className="d-flex container justify-content-center align-items-center">
            <form className="form-group" onSubmit={handleSubmit}>
                <div className = "row mb-3">
                    <label className="col-sm-10">
                        Username:
                        <div>
                            <input type='text' name='username' onChange={handleChange} value={formValues.username} required={true}/>
                        </div>
                    </label>
                </div>
                <div className = "row mb-3">
                    <label>
                        Password:
                        <div className="col-sm-10">
                            <input type='password' name='password' onChange={handleChange} value={formValues.password} required={true}/>
                        </div>
                    </label>
                </div>
                <div className="row">
                    <div className="col-sm-10 col-auto">
                        <button type="submit" className="btn btn-primary">Login</button>
                        <button className="btn btn-secondary" onClick={handleRoute}>Register</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default LoginForm;