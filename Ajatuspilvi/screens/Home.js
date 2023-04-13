import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'



export default function Home({ route, navigation }) {

  const params = route.params

  return (
    <View style={styles.container}>


    <View>
      <Text style={styles.btnSpacer}></Text>
      <Button title='Aloitus'
        onPress={() => navigation.navigate('ThreadMenu')} />
      <Text style={styles.btnSpacer}></Text>
      <Button title='nappi'
        onPress={() => navigation.navigate('NewThread')} />
      <Text style={styles.btnSpacer}></Text>
      <Button title='toinen nappi'
        />
    </View>
       </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  btnSpacer: {
    margin: 15,
    textAlign: 'center',
  },
  logo:{
    resizeMode: "contain",
    height: 100,
    width: 200,
    marginBottom: 100
  },
  Button:{
  color: 'red',
  }
});
