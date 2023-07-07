import React from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";

function Content(props)
{
    const navigate=useNavigate();

    if(!props.isAuthenticated)
    {
        navigate("/home");
    }

    return (<div>
        <h1 className="content animate__animated animate__fadeIn">Thank you for making an account!! Please wait till I make some apps to make use of them :').</h1>
    </div>);
}

export default Content;