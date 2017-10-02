import React from 'react';
import { Stack, Modal, Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

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
                    component={EmployeeCreate}
                    title="Create Employee"
                />
                <Scene
                    key="employeeEdit"
                    component={EmployeeEdit}
                    title="Edit Employee"
                />
            </Stack>
        </Modal>
    </Router>
);

export default RouterComponent;
