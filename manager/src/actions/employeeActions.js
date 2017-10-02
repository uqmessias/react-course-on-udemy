import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FECTH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_CLEAR_FORM,
} from './types';

export const employeeUpdate = ({ prop, value }) => ({
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
});

export const employeeCreate = ({ name, phone, shift }) => (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE });
            Actions.main({ type: 'reset' });
        });
};

export const employeeFetch = () => (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({ type: EMPLOYEES_FECTH_SUCCESS, payload: snapshot.val() });
        });
};

export const employeeSave = ({ name, phone, shift, uid }) => (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
            Actions.main({ type: 'reset' });
        });
};

export const employeeClear = () => ({ type: EMPLOYEE_CLEAR_FORM });
