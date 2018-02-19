import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Profile extends Component {
  static navigationOptions = {
    title: 'My Profile'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile </Text>
        <View style={styles.profile}>
          <View style={styles.thumb}/>
          <Text style={styles.name} > Elton Ventura</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  thumb: {
    margin: 10,
    height: 50,
    width: 50,
    borderWidth: 1,
    backgroundColor: 'blue',
    borderRadius: 100
  },
  profile: {
    margin: 20,
    borderWidth: 1,
    flexDirection: 'row',
  },
  name: {
    marginTop: 20
  }
});
