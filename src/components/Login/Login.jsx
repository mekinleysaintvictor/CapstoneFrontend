import React from "react";
import axios from 'axios';
import useForm from "../CustomForm/CustomForm";

const LoginForm = () => {
    const { formValues, handleChange, handleSubmit } = useForm(loginUser);

    async function loginUser(){
        try{
            let response = await axios.post("http://127.0.0.1:8000/api/auth/login/", formValues);
            console.log(response);
            alert("You're logged in!");
            localStorage.setItem("token", response.data.access);
        }
        catch{
            console.log("Unsuccess");
        }
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
                    <button type="submit" className="btn">Login</button>
                </div>
            </form>
        </div>
    )
}
export default LoginForm;