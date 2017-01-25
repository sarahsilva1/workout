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

export default class workout extends Component {
  render() {
    return (
      <View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{height: 30, backgroundColor: '#f4be35'}} />
          <View style={{height: 365, backgroundColor: '#2ec173'}} />
          <View style={{height: 50, backgroundColor: '#404c99'}} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: 50, height: 100, backgroundColor: 'powderblue'}} />
          <View style={{width: 50, height: 100, backgroundColor: 'skyblue'}} />
          <View style={{width: 50, height: 100, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('workout', () => workout);
