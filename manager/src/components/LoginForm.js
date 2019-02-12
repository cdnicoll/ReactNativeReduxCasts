import React from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends React.Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  // below we use .bind(this) what this does is it will bind the 'this' keyword to
  // the method we pass it, allowing that method to have access to 'this'
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { email, password } = state.auth;

  return {
    email,
    password,
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged },
)(LoginForm);
