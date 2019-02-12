import React from 'react'
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './LoginForm'
import EmployeeList from './EmployeeList'


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                {/* using the initial prop will render that page first */}
                <Scene key="login" component={ LoginForm } title="Please Login" initial></Scene>
                <Scene key="employeeList" component={ EmployeeList } title="Employee List"></Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent;