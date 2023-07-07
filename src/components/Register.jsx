import React, { useState } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function Register(props){
    const [name, setName] = useState("");
    const [password,setPassword]=useState("");
    const [registerror,setRegisterror]=useState(false);
    const [disappear,setDisappear]=useState(false);
    const navigate=useNavigate();

    function handleChange(event)
    {
        setName(event.target.value);
    };

    function changePass(event)
    {
        setPassword(event.target.value);
    }

    function handleSubmit(event)
    {
        Axios.post("https://authenify.onrender.com/register", {name, password})
        .then(res=>
        {
            if(res.data.registered)
            {
                props.setisAuthenticated(true);
                setDisappear(true);
                setTimeout(function()
                {
                    navigate("/content");
                },1000);
            }
            else
            {
                setRegisterror(true);
            }
        })
        event.preventDefault();
    };

    return (
    <div>
        <div className={disappear?"logRegDiv animate__animated animate__fadeOutUp":"logRegDiv animate__animated animate__fadeInDown"}>
            <h1 className="logRegText">Register</h1>
            <p className="Error">{registerror?"That username is already in use!":""}</p>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="textInput">
                    <label className="labels">
                        Username
                    </label>
                    <input
                        className="inputs"
                        type="text"
                        value={name}
                        name="name"
                        onChange={handleChange}
                    />
                </div>
                <div className="textInput">
                    <label className="labels">
                        Password
                    </label> 
                    <input
                        className="inputs"
                        type="password"
                        value={password}
                        name="password"
                        onChange={changePass}
                    />
                </div>
                <input className="submitButton" type="submit" value="Submit" />
            </form>
        </div>
    </div>
    );
};

export default Register;