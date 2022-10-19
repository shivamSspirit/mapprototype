import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Filter() {
  return (
    <View> 
      <Text style={styles.container}> 
        In developement screen for Filter
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
     alignItems: "center",
     backgroundColor: "blue",
     textAlign:"center",
     fontSize:"18",
     color:"white"
  },
})

export default Filter
