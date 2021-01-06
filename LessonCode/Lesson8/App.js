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
// import my custom component. 
// can use different name as it's default export
import ABC from "./custom";

const App = () => {
    return (
        <View>
            <ABC mytext="Happy 2021!" bgcolor="#F99"></ABC>
            <ABC mytext="Hi 1b09!" bgcolor="#9F9"></ABC>
            <ABC mytext="Have a good year!" bgcolor="#99F"></ABC>
        </View>
    );
};

export default App;
