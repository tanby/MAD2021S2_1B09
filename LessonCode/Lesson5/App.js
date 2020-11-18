/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, Button ,View } from 'react-native';

// Lesson 5 App running from a subfolder in react native folder
class App extends Component{
  // copied from PPT
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }

  // put a dummy state variable to test update
  state={
    status : 98
  }
  // event handler
  helloWorld = () => {
    // change status value
    this.setState(
      {status: this.state.status +1}
    );
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  // draw some UI
  render(){
    return(
      <View>
        <Text style={{fontSize:32}}>Hello this is an app in subfolder: 
          {this.state.status}
        </Text>
        <Button title="Update Status" onPress={this.helloWorld} />
      </View>
    );
  }
}

export default App;

