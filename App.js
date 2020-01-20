import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Water from './src/Water';
import Slider from './src/Slider';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        top: 0,
        position: 'absolute',
        width: 100,
        height: 100,
        // top: 0,
        // left: 0,
        // position: 'absolute',
        justifyContent: 'space-around'
      }}>
      <Water top="0%" backgroundColor="#06AED5" />
      </View>
      <View style={{position: 'absolute', top: 0, height: 100, width: 100,}}>
        <Slider />
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
