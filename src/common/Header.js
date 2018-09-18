import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 75,
      backgroundColor: '#999',
      justifyContent: 'center',
      alignItems: 'center'
    },
    textContainer: {
      //flex: 8,
      justifyContent: 'center',
    },
    textHeadline: {
      fontSize: 25,
      textAlign: 'center',
      color: '#fff'
    }
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View>
            <Text style={[styles.textHeadline, this.props.extraStyle]}>
              {this.props.headline}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Header;