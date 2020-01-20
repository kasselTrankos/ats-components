import React from 'react';
import { StyleSheet, View } from 'react-native';
import WaterManager from './src/WaterManager';


export default function App() {
  return (
    <View style={styles.container}>
      <WaterManager radius={300}  strokeWidth={10}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    top: 40,
    left: 0,
    position: 'relative',
    alignItems: 'center',
  },
});
