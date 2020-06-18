import React from "react";
import { Menu, Icon, Header as SUIHeader } from "semantic-ui-react";
import { NavLink } from "react-router-dom";


const NavBar = (props) => (
    <Menu borderless>
        <Menu.Item>
        <SUIHeader as="h1">
            2daloo
            <SUIHeader.Subheader>
                A Next-Gen ToDo App
            </SUIHeader.Subheader>
        </SUIHeader>
        </Menu.Item>
        <Menu.Menu position="right">
        <Menu.Item>
            <NavLink to="/"><Icon name="tasks"/>Tasks</NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/add"><Icon name="plus"/>Add</NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/"><Icon name="sliders horizontal"/>Filter</NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to="/trash"><Icon name="trash alternate"/>Trash</NavLink>
        </Menu.Item>
        </Menu.Menu>
    </Menu>

)
// disabled for trash
const items = [
    { key: 'tasks', active: true, name: 'Tasks' },
    { key: 'add', name: 'Add' },
    { key: 'filter', name: 'Filter' },
    { key: 'trash', name: 'Trash' },
  ]
  
  const MenuExampleProps = () => <Menu items={items} />
  
  export default NavBar;