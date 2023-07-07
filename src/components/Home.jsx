import React from "react";
import {useNavigate} from "react-router-dom";
import "animate.css";

function Home()
{
    const [disappear,setDisappear]=React.useState(false);   
    const navigate=useNavigate();
    function navigateToReg()
    {
        setDisappear(true);
        setTimeout(function()
        {
            navigate("/register");
        },1000)
    }

    function navigateToLogin()
    {
        setDisappear(true);
        setTimeout(function()
        {
            navigate("/login");
        },1000)
    }

    return(
    <div className={disappear?"HomeDiv animate__animated animate__fadeOutUp":"HomeDiv animate__animated animate__fadeIn"}>
        <div className="Home">
            <div className="homeItem">
                <h1 className="TitleText">Authenify</h1>
            </div>
            <div className="homeItem Register">
                <h2 className="navigationItem" onClick={navigateToReg}>Register</h2>
            </div>
            <div className="homeItem Login">
                <h2 className="navigationItem" onClick={navigateToLogin}>Login</h2>
            </div>
        </div>
    </div>
    )
}

export default Home;