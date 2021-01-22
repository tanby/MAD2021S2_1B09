import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList, 
  Button
} from "react-native";

// navigation prop is given to every screen
const Screen1 = ({navigation}) => {
    // add listener
    const buttonpress = () => {
        //alert("button pressed");
        navigation.navigate("Screen Two");
    }
    return (
        <View>
            <Text>Screen 1 hello 1b09</Text>
            <Button title="Go to screen 2" onPress={buttonpress} />
        </View>
    );
}

export default Screen1;
