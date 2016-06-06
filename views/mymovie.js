/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
var { connect } = require('react-redux');

class  MyMovie  extends Component{ 
  render() {
    return (
        <View style={styles.container}>   
         <Text>MyMovie</Text>
        </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


module.exports = connect() (MyMovie);


