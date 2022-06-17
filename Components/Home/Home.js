import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
        <Text>Pranto Mridha</Text>
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 600,
    width: 380,
    // backgroundColor: colors.mainBackground,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F5F5',
   
    // borderWidth:10,
  }});


