import React, { useState } from 'react';
import Axios from "axios";
import {useNavigate} from "react-router-dom";

function Login(props)
{
    const [name, setName] = useState("");
    const [password,setPassword]=useState("");
    const [loginError,setLoginError]=useState(false);
    const [disappear,setDisappear]=useState(false);
    const navigate=useNavigate();

    function handleChange (event)
    {
        setName(event.target.value);
    }

    function changePass(event)
    {
        setPassword(event.target.value);
    }

    const redirectToPage = () =>
    {
        props.setisAuthenticated(true);
        setDisappear(true);
        setTimeout(function()
        {
            navigate("/content");
        },1000);
    }

    const handleSubmit = (event) => 
    {
        Axios.get("https://authenify.onrender.com/login", {params:{name, password}})
        .then(res=>{
        console.log(res.data.authen);
        if(res.data.authen)
        {
            redirectToPage();
        }
        else
        {
            setLoginError(true);
        }
    });
        event.preventDefault();
    };

    return (
    <div>
        <div className={disappear?"logRegDiv animate__animated animate__fadeOutUp":"logRegDiv animate__animated animate__fadeInDown"}>
            <h1 className="logRegText">Login</h1>
            <p className="Error">{loginError?"The username and password do not match!":""}</p>
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
                <input className="submitButton" type="submit" value="Login" />
            </form>
        </div>
    </div>
    );
};

export default Login;