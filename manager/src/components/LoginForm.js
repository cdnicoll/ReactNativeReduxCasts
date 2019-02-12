import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends React.Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
        console.log(password)
      this.props.loginUser({
          email,
          password
      });
  }

  renderError = () => {
      console.log(styles);
      if (this.props.error) {
          return (
            <Text style={styles.errorTextStyle}>
                Error: { this.props.error }
            </Text>
          );
      }
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
        { this.renderError() }
        <CardSection>
          <Button onPress={ this.onButtonPress.bind(this) }>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
  const { email, password, error } = state.auth;

  return {
    email,
    password,
    error
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser },
)(LoginForm);
