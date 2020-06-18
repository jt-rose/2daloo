import React from "react";
import { Header as SUIHeader } from "semantic-ui-react";
import NavBar from "./NavBar";

const Header = (props) => (
    <header>
       <SUIHeader as="h1">
            2do
            <SUIHeader.Subheader>
                A React todo app with redux, react-router, and semantic UI
            </SUIHeader.Subheader>
        </SUIHeader>
        <NavBar />
    </header>
)

export default Header;