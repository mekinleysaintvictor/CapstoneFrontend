import React from "react";
import useForm from "../CustomForm/CustomForm";
import axios from "axios";
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
            alert("Invalid password.");
        }
    }

    const handleRoute = () => {
        history.push("/login");
    }

    return (
        <div className="d-flex container justify-content-center align-items-center">
            <form className="form-group" onSubmit={handleSubmit}>
                <div className = "row mb-3">
                    <label className="col-sm-10">
                        Username:
                        <div>
                            <input type='text' className="form-control" name='username' onChange={handleChange} value={formValues.username} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div className = "row mb-3">
                    <label>
                        Password:
                        <div className="col-sm-10">
                            <input type='password' className="form-control" name='password' onChange={handleChange} value={formValues.password} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div className = "row mb-3">
                    <label>
                        Confirm Password:
                        <div className="col-sm-10">
                            <input type='password' className="form-control" name='password2' onChange={handleChange} value={formValues.password2} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div className = "row mb-3">
                    <label>
                        Email:
                        <div className="col-sm-10">
                            <input type='email' className="form-control" name='email' onChange={handleChange} value={formValues.email} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div className = "row mb-3">
                    <label>
                        First Name:
                        <div className="col-sm-10">
                            <input type='text' className="form-control" name='first_name' onChange={handleChange} value={formValues.first_name} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div className = "row mb-3">
                    <label>
                        Last Name:
                        <div className="col-sm-10">
                            <input type='text' className="form-control" name='last_name' onChange={handleChange} value={formValues.last_name} required={true}/>
                        </div>                        
                    </label>
                </div>
                <div className="row">
                    <div className="col-sm-10 col-auto">
                        <button type="submit" className="btn btn-primary">Register</button>
                        <button className="btn btn-secondary" onClick={handleRoute}>Cancel</button>
                    </div>
                </div>
                <div>
                    
                </div>
            </form>
        </div>
    )
}

export default RegisterForm;