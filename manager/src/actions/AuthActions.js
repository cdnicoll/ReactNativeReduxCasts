import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({ email, password }) => {
    return dispatch => {
        dispatch({ type: LOGIN_USER })
    // 1. Try to sign in
    // 2. Catch failure, try to create user
    // 3. catch creation and dispatch failure
    firebase
      .auth()
      // .signInWithEmailAndPassword(email, password)
      .signInWithEmailAndPassword("test@test.com", "tester")
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        //TODO: Figure out logging
        console.log(error);
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.main();
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};
