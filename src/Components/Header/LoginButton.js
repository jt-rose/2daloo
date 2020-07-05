import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { toggleLogin } from '../../actions';

const LoginButton = (props) => {
  if (props.loggedIn) {
    return (
      <Button
        color="blue"
        style={{
          border: '.12em solid #ffffff'
        }}
        onClick={props.toggleLogin}
      >
        Logout
      </Button>
    );
  } else {
    return (
      <NavLink to="/login">
        <Button
          color="blue"
          style={{
            border: '.12em solid #ffffff'
          }}
        >
          Login
        </Button>
      </NavLink>
    );
  }
};

const mapStateToProps = ({ loggedIn }) => ({ loggedIn });
const mapDispatchToProps = (dispatch) => ({
  toggleLogin: () => dispatch(toggleLogin)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton);
