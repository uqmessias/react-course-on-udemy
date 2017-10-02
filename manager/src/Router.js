import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene
                    key="login"
                    component={LoginForm}
                    title="Please login"
                />
            </Stack>
        </Router>
    );
};

export default RouterComponent;
