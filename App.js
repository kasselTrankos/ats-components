import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Circle from './src/Water';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        width: 90,
        height: 90,
        // top: 0,
        // left: 0,
        // position: 'absolute',
        justifyContent: 'space-around',
        backgroundColor: '#FFF'
      }}>
      <Circle />

      </View>
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
