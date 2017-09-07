import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: '<YOUR_API_KEY_FROM_FIREBASE_SERVER>',
            authDomain: '<YOUR_PROJECT_NAME_FROM_FIREBASE>.firebaseapp.com',
            databaseURL: 'https://<YOUR_PROJECT_NAME_FROM_FIREBASE>.firebaseio.com',
            projectId: '<YOUR_PROJECT_NAME_FROM_FIREBASE>',
            storageBucket: '<YOUR_PROJECT_NAME_FROM_FIREBASE>.appspot.com',
            messagingSenderId: '<YOUR_MESSAGING_SENDER_ID_FROM_FIREBASE>'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => { }}>
                            Log out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <CardSection>
                        <Spinner size="large" />
                    </CardSection>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText={'Authentication'} />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;