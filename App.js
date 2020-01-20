import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Water from './src/Water';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        width: 90,
        height: '100%',
        // top: 0,
        // left: 0,
        // position: 'absolute',
        justifyContent: 'space-around',
        backgroundColor: '#FFF'
      }}>
      <Water top="0%" backgroundColor="#06AED5" />

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
