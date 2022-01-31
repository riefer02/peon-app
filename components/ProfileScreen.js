import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen({ route }) {
  return (
    <View>
      <Text>Hello Profile of {route.params.name}</Text>
    </View>
  );
}
