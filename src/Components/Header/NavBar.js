import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const headerLinks = [
  {
    iconName: 'tasks',
    labelName: 'Tasks',
    navLinkURL: '/'
  },
  {
    iconName: 'plus',
    labelName: 'Add',
    navLinkURL: '/add'
  },
  {
    iconName: 'tags',
    labelName: 'Tags',
    navLinkURL: '/tags'
  },
  {
    iconName: 'trash alternate',
    labelName: 'Trash',
    navLinkURL: '/trash'
  }
];

export const NavBar = () => (
  <Menu icon="labeled" secondary>
    {headerLinks.map((hLink) => (
      <NavLink
        to={hLink.navLinkURL}
        key={`main-navbar-${hLink.iconName}`}
      >
        <Menu.Item name={hLink.iconName} link>
          <Icon name={hLink.iconName} />
          {hLink.labelName}
        </Menu.Item>
      </NavLink>
    ))}
  </Menu>
);

const navBarOnlyIconsStyling = {
  display: 'flex',
  justifyContent: 'space-evenly',
  margin: 0
};

export const NavBarOnlyIcons = () => (
  <Menu
    color="blue"
    inverted
    icon
    secondary
    style={navBarOnlyIconsStyling}
  >
    {headerLinks.map((hLink) => (
      <NavLink
        to={hLink.navLinkURL}
        key={`mobile-navbar-${hLink.iconName}`}
      >
        <Menu.Item name={hLink.iconName} link>
          <Icon
            style={{ color: '#ffffff' }}
            name={hLink.iconName}
            size="large"
          />
        </Menu.Item>
      </NavLink>
    ))}
  </Menu>
);
