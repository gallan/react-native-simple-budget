import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Header from '../common/Header';
import Form from './Form';
import Transactions from './Transactions';

class Register extends Component {
  render() {
    return (
      <View>
        <Header 
          //leftText="Back"
          //leftLink="/"
          headline="Register" 
          //rightText="Menu" 
        />
        <Form />
        <Transactions />
      </View>
    );
  }
}

export default Register;
