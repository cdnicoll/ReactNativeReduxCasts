import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/components/Router';


export default class App extends React.Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCc1O-ZFlaCV_LjlTGK1Xnm9_g8o_rEP9M",
      authDomain: "cdnicoll-manager.firebaseapp.com",
      databaseURL: "https://cdnicoll-manager.firebaseio.com",
      projectId: "cdnicoll-manager",
      storageBucket: "cdnicoll-manager.appspot.com",
      messagingSenderId: "460119301333"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
