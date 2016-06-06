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
  TabBarIOS,
  StatusBar,
  View,
} from 'react-native';
var { connect } = require('react-redux');
var Navigator = require('Navigator');
var Icon = require("react-native-vector-icons/Entypo");
const { swtichTab } = require('../actions');
var Online =require('./online') 
var Cinema =require('./cinema') 
var MyMovie =require('./mymovie')

class App extends Component {
  render() {
    return (
      <TabBarIOS tintColor={"#ea4c89"}>
            {this.renderItem('online','上映中','radio')}
            {this.renderItem('cinema','影院','network')}
            {this.renderItem('mymovie','我的电影','user')}
      </TabBarIOS>
    );
  }

   componentDidMount() {
    this.props.dispatch(swtichTab('online'));
  }

  renderItem(tabName,tabNameCN,iconName){
      return (
         <Icon.TabBarItem
         style={styles.container}
          title={tabNameCN}
          iconName={iconName}
          selectedIconName={iconName}
          selected={this.props.tab === tabName}
          onPress={
              ()=>{this.onTabSelect(tabName)}
            }
          >
          {this._renderContent(tabName,tabNameCN)}
        </Icon.TabBarItem>
                )
  }

  renderScene (route, navigator) {
      if (route.name === 'online') {
      return (
        <Online/>
      );
    }
      if (route.name === 'cinema') {
      return (
        <Cinema/>
      );
    }
      if (route.name === 'mymovie') {
      return (
        <MyMovie/>
      );
    }
    return (
      <Text>empty</Text>
      )
  }

    _renderContent(tabName, title) {
    return (
       <Navigator
        initialRoute={{name:tabName}}
        renderScene={this.renderScene}/>
    );
  }

  onTabSelect(tab: Tab) {
    this.props.dispatch(swtichTab(tab));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    marginTop:20
  }
});


function select(store) {
  return {tab: store.navigate.tab};
}

module.exports = connect(select)(App);


