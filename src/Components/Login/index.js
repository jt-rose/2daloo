import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button, Input, Divider } from 'semantic-ui-react';
import { toggleLogin } from '../../actions';

const signUpContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  border: '.2em solid #2185d0',
  borderRadius: '.5em',
  padding: '1em',
  minWidth: '300px'
};

const centerSpacing = {
  textAlign: 'center'
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  updateUsername = (e) => this.setState({ username: e.target.value });
  updatePassword = (e) => this.setState({ password: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.toggleLogin();
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      const { from } = this.props.location.state || {
        from: { pathname: '/' }
      };
      return <Redirect to={from} />;
    }

    const { username, password } = this.state;
    const nothingEntered =
      username.length === 0 || password.length === 0;
    return (
      <div style={signUpContainerStyle}>
        <Form size="mini" onSubmit={this.onSubmit} style={formStyle}>
          <Form.Field inline>
            <Input
              label={{ content: 'Username', color: 'blue' }}
              placeholder="..."
              onChange={this.updateUsername}
            />
          </Form.Field>
          <Form.Field inline>
            <Input
              label={{ content: 'Password', color: 'blue' }}
              placeholder="..."
              onChange={this.updatePassword}
              type="password"
            />
          </Form.Field>
          <div style={centerSpacing}>
            <Button
              compact
              size="big"
              color="blue"
              disabled={nothingEntered}
            >
              Go!
            </Button>
          </div>

          <Divider hidden />
          <p>
            Forgot username/password? Click{' '}
            <NavLink to="/forgot-password">here</NavLink>
          </p>
          <p>
            New user?{' '}
            <NavLink to="/sign-up">Create an account</NavLink>
          </p>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleLogin: () => dispatch(toggleLogin)
});

export default connect(null, mapDispatchToProps)(Login);
