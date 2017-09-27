import React from 'react';
import { Stack, Modal, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeCreate from './components/EmployeeCreate';

const RouterComponent = () => (
    <Router>
        <Modal hideNavBar>
            <Scene key="auth">
                <Scene
                    key="login"
                    component={LoginForm}
                    title="Please login"
                />
            </Scene>
            <Stack key="main" >
                <Scene
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    initial
                />
                <Scene
                    key="employeeCreate"
                    component={EmployeCreate}
                    title="Create Employee"
                />
            </Stack>
        </Modal>
    </Router>
);

export default RouterComponent;
