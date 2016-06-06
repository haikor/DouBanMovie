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
  ScrollView,
  TouchableHighlight
} from 'react-native';
var { connect } = require('react-redux');
var {Movie:movieType} = require('../types/movie')
var Star = require('./star')


class  Movie  extends Component{ 
  render() {
    return (
        <View style={styles.container}>   
         <Image source={{uri:this.props.movie.images.medium,width:100,height:145}}/>
         <View><Text>{this.props.movie.title}</Text></View>
         <View style={styles.star}>
           <Star star={this.props.movie.rating.stars} />  
          <View><Text>{this.props.movie.rating.stars/10.0}</Text></View>
         </View>
        </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    width:100,
    height:200,
    alignItems:'center'
  }
  ,
  star:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    width:100
  }
});


module.exports = connect() (Movie);


