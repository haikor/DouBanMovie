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
  View
} from 'react-native';


var App = require('./views/app');
var { Provider } = require('react-redux');
var {applyMiddleware, createStore} = require('redux');
var reducers = require('./reducers');


class Root extends Component {
  render() {
      var initState = {
        navigate:{},
        online:{movies:[],loading:false}
      }
      var  store =  createStore(reducers,initState)
    return (
        <Provider store={store}>
        <App/>
        </Provider>
    );
  }
}


AppRegistry.registerComponent('DBMovie', () => Root);
