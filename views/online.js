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
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    loaded: false
  }
   componentDidMount() {

      loadOnline(this.props.dispatch);
  }

  render() {
    if(this.props.movies.length==0){
      return (<Text>no data</Text>)
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
  return {movies: store.online.movies};
}

module.exports = connect(select)(Online);



