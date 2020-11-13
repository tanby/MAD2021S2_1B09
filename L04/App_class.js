/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// from the PPT slide
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  // demo state
  state = {
    example: 100
  }
  // render UI
  render(){
    // use JSX
    return (
      <View>
        <Text>Hello 1B09, this is {this.state.example}</Text>
        <ABC dit="1b09" />
        <ABC dit="3b89" />
      </View>
    );
  }
}

// create a separate Component to be reused
class ABC extends React.Component {
  // render UI
  // demo props
  render(props){
    // use JSX
    return (
      <View>
        <Text>this is property</Text>
        <Text>{this.props.dit}</Text>
      </View>
    );
  }
}
export {ABC};
