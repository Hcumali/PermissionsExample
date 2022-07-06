import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Permission, PERMISSION_TYPE } from "./src/AppPermission";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    Permission.checkPermission(PERMISSION_TYPE.microphone)
    .then(result => console.log("result: ", result))
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Permissions Example</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 21,
    color: "green",
    fontWeight: 'bold'
  }
})