import { combineReducers } from 'redux';
import authReducer from './authReducer';
import employeeForm from './employeeFormReducer';
import employees from './employeeReducer';

export default combineReducers({
    auth: authReducer,
    employeeForm,
    employees,
});
