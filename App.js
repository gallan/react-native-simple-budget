import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './src/Main';
import configureStore from './src/configureStore';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      pAndS: configureStore()
    };
  }
  
  render() {
    return (
      <Provider store={this.state.pAndS.store}>
        <PersistGate persistor={this.state.pAndS.persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
