import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: '<YOUR_API_KEY_FROM_FIREBASE_SERVER>',
            authDomain: '<YOUR_PROJECT_NAME_FROM_FIREBASE>.firebaseapp.com',
            databaseURL: 'https://<YOUR_PROJECT_NAME_FROM_FIREBASE>.firebaseio.com',
            projectId: '<YOUR_PROJECT_NAME_FROM_FIREBASE>',
            storageBucket: '',
            messagingSenderId: '<YOUR_MESSAGING_SENDER_ID_FROM_FIREBASE>'
        };

        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
