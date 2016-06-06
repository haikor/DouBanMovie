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
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native';
var { connect } = require('react-redux');
var {Movie:movieType} = require('../types/movie')
var Movie = require('../components/movie')
var {loadOnline} = require('../actions')

class  Online  extends Component{ 
   componentDidMount() {
      loadOnline(this.props.dispatch);
  }

  render() {
    if(this.props.loading){
       return (<Text>加载中。。。</Text>)
    }

    if(this.props.movies.length==0){
      return (<Text>没数据</Text>)
    }


    return (

        <View style={styles.container}> 
        {this._renderRows(this.props.movies)}
        </View>
    );
  }

  _renderRows(moivies){
      var items = [];
      for(var i in this.props.movies){
          items.push( this._renderRow(this.props.movies[i]));
          }

          return items;
  }

  _renderRow(movie: movieType) {
    return (
      <Movie movie={movie} key={movie.id} style={styles.movie}/>
    );
  }

}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap'   ,
    justifyContent:'space-around',
    paddingTop:10
  },
  movie:{
    width:100,
    height:200
  }
});

function select(store) {
  return  store.online;
}

module.exports = connect(select)(Online);



