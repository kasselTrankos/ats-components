import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, {Circle} from 'react-native-svg';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Svg height="100" width="100">
        <Circle cx="50" cy="50" r="50" fill="pink" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
