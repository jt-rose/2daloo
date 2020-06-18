import React from "react";
import { NavLink } from "react-router-dom";

import SiteLogo from "./SiteLogo";
import NavBar from "./NavBar";
import SignIn from "./SignIn";

import { Menu, Icon, Header as SUIHeader, Button } from "semantic-ui-react";


const Header = (props) => (
    <Menu borderless>
        <Menu.Menu position="left">
        <Menu.Item>
        <SUIHeader as="h1">
            2daloo
            <SUIHeader.Subheader>
                A Next-Gen ToDo App
            </SUIHeader.Subheader>
        </SUIHeader>
        </Menu.Item>
        </Menu.Menu>
        
        <Menu.Menu position="right">
        <Menu.Item>
            <NavLink to="/"><Icon name="tasks"/>Tasks</NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/add"><Icon name="plus"/>Add</NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/settings"><Icon name="setting"/>Settings</NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/trash"><Icon name="trash alternate"/>Trash</NavLink>
        </Menu.Item>
        </Menu.Menu>
        {/*}
        <Menu.Menu position="right">
            <SignIn />
</Menu.Menu>*/}
        <Menu.Item position="right">
            <NavLink to="/login"><Button>Login</Button></NavLink>
        </Menu.Item>
    </Menu>

)

export default Header;