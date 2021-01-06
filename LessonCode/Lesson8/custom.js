/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * Practical - SectionList
 */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";
// my custom component
const MyComponent = (props) => {
    return (
        <View style={{backgroundColor:props.bgcolor, margin:8}}>
            <Text style={{fontSize:16}}>{props.mytext}</Text>
        </View>
    );
};

export default MyComponent;
