import { View, Text, Button, StyleSheet, Image, ImageBackground  } from 'react-native'
import React from 'react'




export default function Home({ route, navigation }) {

  const params = route.params

  return (
    <View style={styles.container}>
    <ImageBackground source={require('../wallpaper.jpg')} style={styles.imageBackground}>

    <View>
      <Text style={styles.btnSpacer}></Text>
            <Button title='Aloitus' onPress={() => navigation.navigate('ThreadMenu')} style={styles.button} />
            <Text style={styles.btnSpacer}></Text>
            <Button title='nappi' onPress={() => navigation.navigate('Login')} style={styles.button} />
            <Text style={styles.btnSpacer}></Text>
            <Button title='toinen nappi' style={styles.button} />
    </View>
    </ImageBackground>
       </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  imageBackground: {
      flex: 1,
      resizeMode: 'fill',
       width: 500,
    },
  btnSpacer: {
    margin: 15,
    textAlign: 'center',
  },
   button: {
      width: 100
  }
});
