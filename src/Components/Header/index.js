import React from "react";

import SiteLogo from "./SiteLogo";
import { NavBar, NavBarOnlyIcons } from "./NavBar";
import LoginButton from "./LoginButton";

import { Menu, Container, Divider } from "semantic-ui-react";

import "./index.css";
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
    <>
        <Menu 
            borderless 
            color="blue" 
            inverted 
            style={{borderRadius: 0, margin: 0}}
        >
            <Container >
                <Menu.Item fitted="vertically" position="left">
                    <SiteLogo />
                </Menu.Item>
                <div className="NavBar">
                    <Menu.Item >
                        <NavBar />
                    </Menu.Item>
                </div>

                <Menu.Item position="right">
                    <LoginButton />
                </Menu.Item>
            </Container>
        </Menu>

        <div 
            className="NBOI-container" 
            style={{position: "sticky", top: -1, zIndex: 999}}
        >
            <div className="NavBarOnlyIcons" >
                <NavBarOnlyIcons />
            </div>
        </div>
    </>
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