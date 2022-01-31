import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('Main');

  useEffect(() => setTimeout(() => setMessage('Nomsay'), 1000), [message]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.iOS} />
      <View style={styles.header}>
        <Text>Header</Text>
        <TouchableOpacity
          onPress={() => setMessage('Work Work Work Zug Zug')}
          style={styles.button}
        >
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Text>{message}</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
        <Image source={require('./assets/peon.jpeg')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // flexDirection: 'row',
  },
  header: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  main: {
    flex: 1,
    backgroundColor: 'orange',
  },
  footer: {
    flex: 1,
    backgroundColor: 'pink',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  iOS: {
    height: 20,
    width: '100%',
  },
});
