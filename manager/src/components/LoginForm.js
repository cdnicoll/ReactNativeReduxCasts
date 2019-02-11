import React from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label='Email' placeholder='email@email.com' />
        </CardSection>
        <CardSection>
          <Input label='Password' placeholder='password' />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
