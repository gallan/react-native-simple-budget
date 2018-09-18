import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import DatePicker from 'react-native-datepicker'


const styles = StyleSheet.create({
  fields: {
    marginVertical: 20
  },
  row: {
    flexDirection: 'row',
    margin: 9
  },
  inputView: {
    flex: 3,
    alignItems: 'flex-end'
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    height: 40,
    width: 250,
    borderRadius: 10,
    padding: 5
  },
  button: {
    backgroundColor: '#333',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    borderRadius: 50 / 2,
    width: 150
  },
  buttonText: {
    color: '#fefefe'
  }
})
class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: '2018-09-09', //date.now ...
      payee: 'Ds Six Pax n Dogs',
      memo: 'Refreshments',
      amount: '17.33'
    }
  }

  render() {
    return (
      <View>
        <View style={styles.fields}>
          <View style={styles.row}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text>Date</Text>
            </View>
            <View style={styles.inputView}>
              <DatePicker
                style={{ width: 250 }}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  borderColor: 'red',
                  dateIcon: {
                    position: 'absolute',
                    left: 10,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    borderRadius: 10,
                    borderColor: '#999',
                    borderWidth: 1
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
            </View>
          </View>
            
          <View style={styles.row}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text>Payee</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                onChangeText={(payee) => this.setState({payee})}
                value={this.state.payee}
              />
            </View>
          </View>

          <View style={styles.row}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text>Memo</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                onChangeText={(memo) => this.setState({memo})}
                value={this.state.memo}
              />
            </View>
          </View>
          
          <View style={styles.row}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
              <Text>Amount</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                onChangeText={(amount) => this.setState({amount})}
                value={this.state.amount}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        

      </View>
    );
  }
}

export default Form;
