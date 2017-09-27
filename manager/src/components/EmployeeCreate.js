import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
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
                        onChangeText={
                            name => this.props.employeeUpdate({ prop: 'name', value: name })
                        }
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="(11) 9 8765 4321"
                        value={this.props.phone}
                        onChangeText={
                            phone => this.props.employeeUpdate({ prop: 'phone', value: phone })
                        }
                    />
                </CardSection>

                <CardSection>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={
                            day => this.props.employeeUpdate({ prop: 'shift', value: day })
                        }
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
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
