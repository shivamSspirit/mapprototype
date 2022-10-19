import React from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import Slideshow from 'react-native-image-slider-show';

function Birb(props) {
  return (
    <View style={styles.container}>
      <View style={styles.uppercontainer}>
        <Image source={{ uri: `${props.otherlocations[0].profilePic}` }} style={styles.proImg} />

        <View style={styles.innercontainer}>
          <Text style={styles.title}>{props.otherlocations[0].title}</Text>
          <Text style={styles.description}>{props.otherlocations[0].description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')} style={styles.button}>
              <Button
                title="subscribe"
                onPress={() => Alert.alert('Simple Button pressed')}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('Simple Button pressed')} style={styles.button}>
              <Button
                title="share"
                onPress={() => alert('Simple Button pressed')}
                color="#f194ff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Slideshow position={1} dataSource={props.otherlocations[0].roompics} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  uppercontainer: {
    flex: 0,
    flexDirection: "row",
  },

  innercontainer: {
    marginTop: 20,
    marginLeft: 10,
    flex: 0,
    flexDirection: "column",
  },

  proImg: {
    width: 120,
    height: 110,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 6
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    color: "white"
  },
  description: {
    fontSize: 16,
    color: "white"
  },

  buttonContainer: {
    marginTop: 20,
    marginLeft: 10,
    flex: 0,
    flexDirection: "row",
  },
  button: {
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginLeft: 3
  }
});

export default Birb