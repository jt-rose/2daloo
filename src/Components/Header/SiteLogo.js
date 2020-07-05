import React from 'react';
import { Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const SiteLogo = () => (
  <NavLink to="/">
    <Header as="h1" inverted>
      2daloo
      <Header.Subheader style={{ fontSize: '1.1rem' }}>
        daily task planner
      </Header.Subheader>
    </Header>
  </NavLink>
);

export default SiteLogo;
