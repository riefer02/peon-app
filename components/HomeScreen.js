import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Button,
  Animated,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState('');

  useEffect(() => setTimeout(() => setMessage('Nomsay'), 1000), [message]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text>Header</Text>
        <Button
          onPress={() => navigation.navigate('Profile', { name: 'Andrew' })}
          title="Profile"
        />
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert('Pressed!')}
          style={styles.button}
        >
          <Text>Highlight</Text>
        </TouchableHighlight>
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
        <FadeInView
          style={{ width: 250, height: 50, backgroundColor: 'powderblue' }}
        >
          <Image source={require('../assets/peon.jpeg')} />
        </FadeInView>
      </View>
    </View>
  );
}

function FadeInView({ children, style }) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View // Special animatable View
      style={{
        style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {children}
    </Animated.View>
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
