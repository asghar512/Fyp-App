import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { auth, database } from '../firebase'

let array = []

const HomeScreen = () => {
  const navigation = useNavigation()
  // const [isalert, setalert] = useState({})
  const [isalert, setalert] = useState([])
  useEffect(() => {
    database
      .ref('/')
      .once('value')
      .then(snapshot => {
        // let temArray = []
        // snapshot.map((child) =>{
        //   temArray.push(child.val())
        // })
        // // temArray.push({
        // //   AlertMsg: snapshot.val()
        // // })
        //  setalert(temArray)
        setalert(snapshot.val())
      });
  }, [])
  console.log("A",isalert)

  for (var key in isalert) {
    array.push({
      alertMessage: isalert[key].OfficeAlert
    })
  }
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
          <SafeAreaView style={styles.container1}>
      <ScrollView style={styles.scrollView}>
        

    <Text style={styles.officealert}>{"Alert Messages"}</Text>
    {
      array.length > 0 ?
        array.map(item => {
          console.log("A", item)
          return (
            <>
              <Text style={styles.alertmsg}>{item.alertMessage}</Text>
            </>
          )
        })
        :
        null
    }
          {/* {
      isalert.length > 0 ?
        isalert.map(item => {
          console.log("A", item)
          return (
            <>
              <Text style={{ color: 'blue', fontWeight: 'bold', marginTop: 10, margin: 13, padding: 10, fontSize: 20, marginLeft: 10 }}>{item.alertMsg}</Text>
            </>
          )
        })
        :
        null
    } */}
    {/* <Text>Email: {auth.currentUser?.email}</Text> */}
    <TouchableOpacity
      onPress={handleSignOut}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Sign out</Text>
    </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
      

  </View>


  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
  },
  
  container1: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  officealert:{
    color:'red',
    fontSize:20,
    marginBottom:40,
    fontWeight:'bold',
    marginLeft:90,


  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 120,
    marginLeft:70,
  },
  alertmsg:{
    color:'white',
    fontSize:20,
    marginTop:10,
    textAlign:'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
