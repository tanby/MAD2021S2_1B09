import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// function style
P4C = (props) => {
    return(
        <View >
            <Text style={{fontSize:18, textAlign:'center',
                        margin:16}}>
                Hello this is {props.randomName}
                </Text>
        </View>
    );
}
// export so that we can import into the other component
export default P4C;