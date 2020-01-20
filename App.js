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
        width: 200,
        height: 200,
        // top: 0,
        // left: 0,
        // position: 'absolute',
        justifyContent: 'space-around'
      }}>
      <Water top="0%" backgroundColor="#06AED5" />
      </View>
      <View style={{position: 'absolute', top: 0, height: 200, width: 200,}}>
        <Slider strokeWidth={3} strokeColor="#999" width={200} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    top: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
