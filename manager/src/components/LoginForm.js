import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import {
    Card,
    CardSection,
    Input,
    Button,
    Spinner,
} from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange = email => {
        this.props.emailChanged(email);
    }

    onPasswordChange = password => {
        this.props.passwordChanged(password);
    }

    onButtonPress = () => {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        onChangeText={this.onPasswordChange}
                        placeholder="password"
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return ({
        email,
        password,
        error,
        loading,
    });
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser,
})(LoginForm);
