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
  Image,
  TouchableHighlight
} from 'react-native';
var { connect } = require('react-redux');

class  Star  extends Component{ 
  render() {
    var starNum = parseInt(this.props.star/20.0)
    return (
        <View style={styles.container}>   
            <Text>{starNum}颗星</Text>
        </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


module.exports = Star;


