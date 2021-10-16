import React from "react";
import useForm from "../CustomForm/CustomForm";
import axios from "axios";
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
        <div className="d-flex container justify-content-center align-items-center">
            <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col">
                        <label>
                            Instruments:
                            <div>
                                <input type='text' className="form-control" placeHolder="Guitar, piano, drums etc." name='instruments' onChange={handleChange} value={formValues.instruments} required={false}/>
                            </div>                        
                        </label>
                    </div>
                </div>
                <div>
                    <label>
                        Influences:
                        <div>
                            <input type='text' className="form-control" placeHolder="Who inspires you?" name='influences' onChange={handleChange} value={formValues.influences} required={false}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Genres:
                        <div>
                            <input type='text' className="form-control" placeHolder="Rock, pop, hip-hop?" name='genres' onChange={handleChange} value={formValues.genres} required={false}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <label>
                        Video:
                        <div>
                            <input type='text' className="form-control" placeHolder="Video ID goes here!"name='video' onChange={handleChange} value={formValues.video} required={false}/>
                        </div>                        
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        About Me:
                        <div>
                            <textarea type='text' rows="5" placeHolder="Tell us about yourself." name='aboutMe' onChange={handleChange} value={formValues.aboutMe} required={false}/>
                        </div>                        
                    </label>
                </div>
                <div>
                    <div>
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button className="btn btn-danger" onClick={handleRoute}>Cancel</button>
                    </div>
                </div>
                <div>
                    
                </div>
            </form>
        </div>
    )
}

export default EditProfile;