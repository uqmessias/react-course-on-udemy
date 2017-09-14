import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
    onEmailChange = email => {
        this.props.emailChanged(email);
    }

    onPasswordChange = password => {
        this.props.passwordChanged(password);
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

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = ({ auth }) => ({
    email: auth.email,
    password: auth.password,
});

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
