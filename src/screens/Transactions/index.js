import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDeposit, addWithdrawal } from '../../actions/transactionActions';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 9
  },
})
class Transactions extends Component {

  renderTransactionRow() {
    const transactions = this.props.myTransactions;
    return transactions.map((item, i) => (
      <View style={styles.row} key={i}>
        <View style={{ flex: 2 }}>
          <Text>{item.date}</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text>{item.payee}</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text>{item.memo}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>${item.amount}</Text>
        </View>
      </View>
    ));
    
  }

  render() {
    return( 
      <View>
        {this.renderTransactionRow()}
      </View>
    )
  }
}

const mapStateToProps = ({ transactionReducer }) => {
  const { myTransactions } = transactionReducer;
  return {
    myTransactions
  };
};

export default connect(mapStateToProps, {
  addDeposit,
  addWithdrawal
})(Transactions);
