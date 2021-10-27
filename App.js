import * as Speech from 'expo-speech';
import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity, Image, Alert} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
     name: '',
    };
  }

  speak=()=> {
    var thingToSay = this.state.name
    Speech.speak(thingToSay);
  }

  render(){
    return(
      <SafeAreaProvider>
        <View>
          <Header
            backgroundColor={'#269ed7'}
            centerComponent={{text:'Text to Speech Converter', style:{color:'black', fontSize:15, fontWeight:'bold'}}}
          />

          <Image style={styles.imageIcon}
            source={{
              uri:'https://www.wpexplorer.com/wp-content/uploads/best-wordpress-text-to-speech-plugins.jpg',
            }}>
          </Image>

          <Text style={styles.text}>Enter the Word</Text>

          <TextInput style={styles.inputBox} onChangeText={(text) => {
                this.setState({ name: text });
              }}>
            </TextInput>

            <TouchableOpacity style={styles.button}
              onPress={()=>{this.speak()}}>
              <Text style={styles.buttonText}>Click Here to hear Speech</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    )
  }

}

const styles = StyleSheet.create({
  inputBox: {
    borderWidth:3, 
    marginTop:20, 
    textAlign:"center",
    height: 40,
    width: '80%',
    alignItems: "center",
    backgroundColor: '#c0e7f9',
    alignSelf: 'center',
    fontSize: 20,
  },
  imageIcon: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginTop: 15
  },
  text:{
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20
  },
  button:{
    width: 300,
    height:50,
    borderWidth: 3,
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 20,
    backgroundColor: '#269ed7',
    padding: 5, 
  },
  buttonText:{
    fontWeight: 'bold',
    color: 'black',
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    

  }
})