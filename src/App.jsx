import React from "react";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Content from "./components/Content.jsx";
import Home from "./components/Home.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App()
{
    const [isAuthenticated,setisAuthenticated]=React.useState(false);

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element=
            {
                <Home
                />
            } />
            <Route path="/register" element=
            {
                <Register
                    setisAuthenticated={setisAuthenticated}
                />
            } />
            <Route path="/login" element=
            {
                <Login 
                    setisAuthenticated={setisAuthenticated}
                />
            } />
            <Route path="/content"
            element=
            {
                <Content
                    isAuthenticated={isAuthenticated}
                />
            }
            />
        </Routes>
    </BrowserRouter>
    );
}

export default App;