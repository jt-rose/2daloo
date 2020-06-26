import React, { Component } from "react";
import { Menu, Icon, Button, Label } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const headerLinks = [
    {
        iconName: "tasks",
        labelName: "Tasks",
        navLinkURL: "/"
    },
    {
        iconName: "plus",
        labelName: "Add",
        navLinkURL: "/add"
    },
    {
        iconName: "settings",
        labelName: "Settings",
        navLinkURL: "/settings"
    },
    {
        iconName: "trash alternate",
        labelName: "Trash",
        navLinkURL: "/trash"
    }
];

const NV2 = () => (
    <Menu icon="labeled" secondary>
        {headerLinks.map(hLink => (
            <NavLink to={hLink.navLinkURL}>
                <Menu.Item name={hLink.iconName} link>
                    <Icon name={hLink.iconName}/>
                    {hLink.labelName}
                </Menu.Item>
            </NavLink>
        ))}
    </Menu>
);

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: 0
        };
        this.updateScreenWidth = this.updateScreenWidth.bind(this);
    }
    updateScreenWidth = () => this.setState({ screenWidth: window.innerWidth });

    componentDidMount = () => {
        this.updateScreenWidth();
        window.addEventListener("resize", this.updateScreenWidth)
    };

    render() {
        const largeScreen = this.state.screenWidth >= 700;
        return (
            <Menu.Menu position="right">
        <Menu.Item>
            <NavLink to="/">
                <Icon name="tasks" size="large"/>
                { largeScreen && <Label color="blue">Tasks</Label>}
            </NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/add">
                <Icon name="plus" size="large"/>
                { largeScreen && <Label color="blue">Add</Label>}
            </NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/settings">
                <Icon name="setting" size="large"/>
                { largeScreen && <Label color="blue">Settings</Label>}
            </NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/trash">
                <Icon name="trash alternate" size="large"/>
                { largeScreen && <Label color="blue">Trash</Label>}
            </NavLink>
        </Menu.Item>
        </Menu.Menu>
        )
    }
};
  
export default NV2;