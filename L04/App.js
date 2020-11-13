/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// from the PPT slide
// add useState to import for use with function
import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// write component using function method
const App = () => {
  // demo state
  const [example, setExample] = useState(100);
  
  // render UI
  // use JSX
  // to use example, no need to use this.
  return (
    <View>
      <Text>Hello 1B09, this is {example}</Text>
      <ABC dit="1b09" />
      <ABC dit="2b89" />
    </View>
  );
}

export default App;

// create a separate Component to be reused
const ABC = (props) => {
  // render UI
  // demo props
  // use JSX
  // to use props, no need to use this.
  return (
    <View>
      <Text style={friday.bigtext}>this is property</Text>
      <Text style={friday.content}>{props.dit}</Text>
    </View>
  );
  
}
export {ABC};

// add stylesheet
const friday = StyleSheet.create(
  {
    bigtext:{
      fontSize: 40
    },
    content: {
      backgroundColor: "#990033",
      fontSize: 24,
      padding: 16, 
      color: "white"
    }
  }
);
