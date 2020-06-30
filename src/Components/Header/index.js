import React from "react";
import { NavLink } from "react-router-dom";

import SiteLogo from "./SiteLogo";
import NavBar from "./NavBar";
import LoginButton from "./LoginButton";

import { Menu, Button, Header as SUIHeader, Container, Grid } from "semantic-ui-react";
/*
const HeaderGrid = () => (
    <Grid  fixed="top" inverted color="blue">
        <Grid.Row>
        <Menu borderless color="blue" inverted 
    style={{borderRadius: "0px"}}>
        <Container position="left">
            <Menu.Item fitted >
                <SiteLogo />
            </Menu.Item>
        
        
        <NavBar only="wide-screen"/>

        <Menu.Item position="right">
            <NavLink to="/login">
                <Button>
                    Login
                </Button>
            </NavLink>
        </Menu.Item>
        </Container>
    </Menu>
        </Grid.Row>

        <Grid.Row only="mobile">
            <Menu inverted color="blue">
                <Menu.Item>
                    <NavBar />
                </Menu.Item>
            </Menu>
            
        </Grid.Row>
        
    </Grid>
)


const Header = () => (
    <Grid>
        <Grid.Column color="blue" inverted>
        <Container >
            <Grid columns="equal" >
    <Grid.Column fitted color="teal" inverted><SiteLogo /></Grid.Column>
    <Grid.Column color="teal" inverted> <NavBar /></Grid.Column>
    <Grid.Column color="teal" inverted> <SiteLogo /></Grid.Column>
            </Grid>
        </Container>
        </Grid.Column>
    </Grid>
)

<Grid.Column textAlign="center">
        <NavBar />
    </Grid.Column>

    <Grid.Column textAlign="right">
        <NavLink to="/login">
                <Button >
                    Login
                </Button>
            </NavLink>
    </Grid.Column>
*/
const Header = () => (
    <Menu 
        borderless 
        color="blue" 
        inverted 
        style={{borderRadius: "0px"}}
    >
        <Container >
            <Menu.Item fitted="vertically" position="left">
                <SiteLogo />
            </Menu.Item>
        
        <NavBar />

        <Menu.Item position="right">
            <LoginButton />
        </Menu.Item>
        </Container>
    </Menu>
);


/*
const Header2 = () => (
    <header>
        <Menu fixed="top" inverted>
            <Container>
                <Menu.Item as="a" header>
                    2daloo
                </Menu.Item>
            </Container>

        </Menu>
    </header>
)
*/
export default Header;