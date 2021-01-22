import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";
// import all the navigation modules
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import all the screens
import Screen1 from './Screen1';
import Screen2 from './Screen2';

// create a stack navigator
const Stack = createStackNavigator();

const NavApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Screen One" component={Screen1} />
                <Stack.Screen name="Screen Two" component={Screen2} />
            </Stack.Navigator>
        </NavigationContainer>
        // <View>
        //     <Text>Navigation Demo</Text>
        // </View>
    );
};

export default NavApp;