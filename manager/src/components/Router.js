import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      {/* using the initial prop will render that page first */}
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Please Login' />
        </Scene>
        <Scene key='main'>
          <Scene
            rightTitle='+'
            onRight={() => Actions.employeeCreate()}
            key='employeeList'
            component={EmployeeList}
            title='Employee List'
            
          />
          <Scene
            key='employeeCreate'
            component={EmployeeCreate}
            title='Create'
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
