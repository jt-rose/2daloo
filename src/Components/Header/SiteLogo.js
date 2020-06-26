import React from "react";
import { Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const SiteLogo = () => (
    <NavLink to="/">
        <Header as="h1" inverted>
            2daloo
            <Header.Subheader >
                A Next-Gen ToDo App
            </Header.Subheader>
        </Header>
    </NavLink>
)

export default SiteLogo;