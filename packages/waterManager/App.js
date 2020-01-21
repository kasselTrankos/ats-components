import React from 'react';
import { StyleSheet, View } from 'react-native';
import WaterManager from './src/WaterManager';


export default function App() {
  return (
    <View style={styles.container}>
      <WaterManager/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 30,
    left: 0,
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
