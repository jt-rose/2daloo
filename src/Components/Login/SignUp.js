import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLogin } from '../../actions';
import {
  Form,
  Label,
  Header,
  List,
  Icon,
  Divider
} from 'semantic-ui-react';
import {
  confirmSpecialCharacter,
  confirmUpperAndLowerCase
} from '../ErrorMessage/formValidation';

const PassValidationIcon = () => (
  <Icon name="check circle outline" color="green" />
);
const FailValidationIcon = () => <Icon name="x" color="red" />;

const signUpContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'left'
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

class SignUp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      redirect: false
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateConfirmPassword = this.updateConfirmPassword.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateEmail = (e) => this.setState({ email: e.target.value });
  updateUsername = (e) => this.setState({ username: e.target.value });
  updatePassword = (e) => this.setState({ password: e.target.value });
  updateConfirmPassword = (e) =>
    this.setState({ confirmPassword: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.toggleLogin();
    this.setState({ redirect: true });
    /* In a full-stack app, this would communicate with the backend 
        before returning to the home page */
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    const { email, username, password, confirmPassword } = this.state;
    const passwordLongEnough = password.length > 7;
    const passwordIncludesSpecChars = confirmSpecialCharacter(
      password
    );
    const passwordUpperAndLower = confirmUpperAndLowerCase(password);
    const passwordsMatch =
      password === confirmPassword && password.length > 0;
    const allPassing =
      passwordLongEnough &&
      passwordIncludesSpecChars &&
      passwordUpperAndLower &&
      passwordsMatch &&
      email.length > 0 &&
      username.length > 0;

    return (
      <div style={signUpContainerStyle}>
        <Form style={formStyle} onSubmit={this.onSubmit}>
          <Label fluid color="blue" style={{ marginBottom: '2em' }}>
            <Header inverted as="h2" style={centerSpacing}>
              Sign-Up
            </Header>
          </Label>
          <br />

          <Form.Field>
            <label style={{ color: '#2185d0' }}>Email</label>
            <input placeholder="..." onChange={this.updateEmail} />
          </Form.Field>
          <Form.Field>
            <label style={{ color: '#2185d0' }}>Username</label>
            <input placeholder="..." onChange={this.updateUsername} />
          </Form.Field>

          <Divider hidden></Divider>

          <Form.Field>
            <label style={{ color: '#2185d0' }}>Password</label>
            <input
              placeholder="..."
              onChange={this.updatePassword}
              type="password"
            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: '#2185d0' }}>
              Confirm Password
            </label>
            <input
              placeholder="..."
              onChange={this.updateConfirmPassword}
              type="password"
            />
          </Form.Field>

          <List>
            <List.Item>
              {passwordLongEnough ? (
                <PassValidationIcon />
              ) : (
                <FailValidationIcon />
              )}
              at least 8 characters long
            </List.Item>
            <List.Item>
              {passwordUpperAndLower ? (
                <PassValidationIcon />
              ) : (
                <FailValidationIcon />
              )}
              upper and lower case
            </List.Item>
            <List.Item>
              {passwordIncludesSpecChars ? (
                <PassValidationIcon />
              ) : (
                <FailValidationIcon />
              )}
              special character - Ex: !@#$%&*?
            </List.Item>
            <List.Item>
              {passwordsMatch ? (
                <PassValidationIcon />
              ) : (
                <FailValidationIcon />
              )}
              passwords match
            </List.Item>
          </List>

          <div style={centerSpacing}>
            <Form.Button
              color="blue"
              size="big"
              disabled={!allPassing}
              type="submit"
            >
              Submit
            </Form.Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleLogin: () => dispatch(toggleLogin)
});

export default connect(null, mapDispatchToProps)(SignUp2);
