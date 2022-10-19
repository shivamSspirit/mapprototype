import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Likes() {
  return (
    <View>
      <Text style={styles.container}>
        In developement screen for Likes
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

export default Likes