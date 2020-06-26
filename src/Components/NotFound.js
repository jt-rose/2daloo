import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => (
    <div>
        <p><b>Uh oh!</b> No page was found at '{window.location.pathname}' - click here to return <NavLink to="/">Home</NavLink></p>
        
    </div>
);

export default NotFound;