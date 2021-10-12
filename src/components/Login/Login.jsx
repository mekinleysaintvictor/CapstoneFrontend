import React from "react";
import useForm from "../CustomForm/CustomForm";

const LoginForm = () => {
    const { formValues, handleChange, handleSubmit } = userForm(login);
    const API_URL = "http://localhost:8080/api/auth/";
    
    const login = (formValues) => {
        return axios
          .post(API_URL + "login", {
            username,
            password,
          })
          .then((response) => {
            if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
      
            return response.data;
          });
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <div>
                            <input input type='text' name='username' onChange={handleChnage} value={formValues.username} required={true}/>
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        Username:
                        <div>
                            <input input type='text' name='username' onChange={handleChnage} value={formValues.username} required={true}/>
                        </div>
                    </label>
                </div>
            </form>
        </div>
    )
}