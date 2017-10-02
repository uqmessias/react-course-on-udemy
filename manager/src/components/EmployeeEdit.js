import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeSave, employeeClear } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    componentWillUnmount() {
        this.props.employeeClear();
    }

    onButtonPress = () => {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeSave,
    employeeClear,
})(EmployeeEdit);
