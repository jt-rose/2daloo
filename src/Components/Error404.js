import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = ({location}) => (
    <div>
        <h3>Whoops!</h3>
        <p>There is no page at '{location.pathname}' - Click here to return <NavLink exact to="/">Home</NavLink></p>
    </div>
);

export default Error404;