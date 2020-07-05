import React from 'react';

import SiteLogo from './SiteLogo';
import { NavBar, NavBarOnlyIcons } from './NavBar';
import LoginButton from './LoginButton';

import { Menu, Container } from 'semantic-ui-react';

import './index.css';

const Header = () => (
  <>
    <Menu
      borderless
      color="blue"
      inverted
      style={{ borderRadius: 0, margin: 0 }}
    >
      <Container>
        <Menu.Item fitted="vertically" position="left">
          <SiteLogo />
        </Menu.Item>
        <div className="NavBar">
          <Menu.Item>
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
      style={{ position: 'sticky', top: -1, zIndex: 999 }}
    >
      <div className="NavBarOnlyIcons">
        <NavBarOnlyIcons />
      </div>
    </div>
  </>
);

export default Header;
