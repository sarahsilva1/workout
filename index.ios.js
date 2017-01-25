/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native';
import Button from 'apsl-react-native-button'

export default class workout extends Component {
  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{height: 30, backgroundColor: '#229b7f'}}>
          </View>

          <View style={{flex: 6, backgroundColor: '#404c99'}}>
            <Text style={{padding: 20, fontSize: 26, color: 'yellow', textAlign: 'center'}}>
              Aaron's Workout Tracker
            </Text>
            <Text style={{padding: 20, fontSize: 20, color: 'yellow', textAlign: 'center'}}>
              Please enter your email address and password to begin!
            </Text>

            <View style={{paddingLeft: 20, padding: 20 }}>
                  <TextInput
                           style={{margin: 5, padding: 5, backgroundColor: 'white', height: 40}}
                           placeholder=" Email"
                           onChangeText={(text) => this.setState({text})}
                           />

                  <TextInput
                          secureTextEntry={true} style={{margin: 5, padding: 5, backgroundColor: 'white', height: 40}}
                          placeholder=" Password"
                          onChangeText={(text) => this.setState({text})}
                          />
                  <Button style={{margin: 5, backgroundColor: '#229b7f'}}>
                      <Text>Submit</Text>
                  </Button>
            </View>
          </View>

          <View style={{flex: 1, backgroundColor: '#f4be35'}} >
          <Text>I'm the last thing
          </Text>
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
