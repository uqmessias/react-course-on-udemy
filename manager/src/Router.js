import React from 'react';
import { Stack, Modal, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
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
                        back={false}
                        key="employeeList"
                        component={EmployeeList}
                        titleStyle={{ alignSelf: 'center' }}
                        title="Employees"
                    />
                </Stack>
            </Modal>
        </Router>
    );
};

export default RouterComponent;
