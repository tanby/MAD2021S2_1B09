import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  Button
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

// sample function to convert from object to array
const processData = (data) => {
    // store everything in array
    var result = [];
    for(var key in data){
      data[key].id=key;
      result.push(data[key]);
    }
    console.log(result);
    return result;
  }
// sample function to display array in string
const displayString = (array) =>{
    var result = "";
    for(var i=0; i<array.length; i++){
        result += array[i].name +": " + array[i].price+ "\n";
    }
    return result;
}


const App = () =>{
    // use state to store array
    const [arr, setArr] = useState([]);
    // use state to store string to display in UI
    const [result, setResult] = useState("");
    // use state to store user input
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    // add in function to read data
    const fetchData = () => {
        fetch('https://mapp2019-6d4f1.firebaseio.com/products.json')
        .then((response) => response.json())
        .then((json) => {
            console.log(json); // or store as state or to display
            // process data and store in state
            setArr( processData(json));
            setResult(displayString(arr));
        })
        .catch((error) => console.error(error))
    }
    
    // a listener to fetch data when button click
    const buttonpress = () =>{
        fetchData();
    }
    // listeners to get user input
    const getname = (value) =>setName(value);
    const getprice = (value) => setPrice(value);

    // functio to add data to firebase
    const addData = (name, price) =>{
        console.log("adding data");
        fetch('https://mapp2019-6d4f1.firebaseio.com/products.json', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': name,
                'price': price
            })
        }).then((response) => response.json())
        .then((json) => {
            console.log(json);
          return json;
        })
        .catch((error) => {
          console.error(error);
        });;
    }; 

    const addbtnpress = () => addData(name, price);

    // to call fetch data when component is mounted
    useEffect(()=>fetchData(), []);
    
    return(
        <View style={{flex:1}}>
            <Text>Testing firebase</Text>
            <Button title="Fetch Data" onPress={buttonpress} />
            <TextInput placeholder="name" onChangeText={getname} />
            <TextInput placeholder="price" onChangeText={getprice} />
            <Button title="Add Product" onPress={addbtnpress} />
            <ScrollView><Text style={{fontSize:24}}>{result}</Text></ScrollView>
        </View>
    )
}

export default App;