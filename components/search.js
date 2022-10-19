import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, TextInput } from "react-native";

function Search() {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="placeholder"
          keyboardType="alphanumeric"
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    color: "white",
    fontSize: 16
  },
});

export default Search