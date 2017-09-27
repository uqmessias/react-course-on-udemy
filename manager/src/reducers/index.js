import { combineReducers } from 'redux';
import authReducer from './authReducer';
import employeeForm from './employeeFormReducer';

export default combineReducers({
    auth: authReducer,
    employeeForm,
});
