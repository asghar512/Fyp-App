import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
//import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// const image = { uri: "https://reactjs.org/logo-og.png" };

export default function Login(props) {

  return (


    <View style={styles.container}>
      <ImageBackground source={require('../assets/img3.jpg')} resizeMode="cover" style={styles.image}>
      <Text style={styles.heading}>{"Employee Move Detection "}</Text>
        <StatusBar style="auto" />
        
        
        <TouchableOpacity>
                <Text style={styles.btn} onPress={()=>props.navigation.navigate("Login")} >Continue</Text>
                
        </TouchableOpacity>
      </ImageBackground>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    color:'#17202A',
    fontSize: 28,
    textAlign:'center',
    marginBottom:170,
    //marginTop:-100,
    fontWeight:'bold',
    opacity:0.8,

  },
  image: {
    flex:1,
    justifyContent: "center",
    opacity:0.7,
    width: '100%',
    height:'100%',

  },
  btn:
  {
    fontSize: 25,
    marginTop: 180,
    backgroundColor: 'black', 
    color: 'white',
    borderRadius: 10,
    padding:10,
    textAlign:'center',
    width:'60%',
    alignItems:'center',
    fontWeight:'bold',
    marginLeft:70,
  },
  // btn2:
  // {
  //     fontSize: 20,
  //     marginTop: 25, marginLeft: 100,
  //     backgroundColor: 'white',
  //     height: 30,
  //     width: 150,
  //     textAlign: 'center', color: 'black',
  //     borderRadius: 11,
  // },
});