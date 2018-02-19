import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Post title </Text>
        <Text style={styles.description}> Lorem Ipsun bla</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 60,
    marginTop: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    marginTop: 10
  }
});