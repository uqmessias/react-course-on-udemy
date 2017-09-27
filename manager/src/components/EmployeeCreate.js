import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={name => this.props.employeeUpdate({ prop: 'name', value: name })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="(11) 9 8765 4321"
                        value={this.props.phone}
                        onChangeText={phone => this.props.employeeUpdate({ prop: 'phone', value: phone })}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
