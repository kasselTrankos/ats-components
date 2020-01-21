import React from 'react';
import { StyleSheet, View } from 'react-native';
import WaterManager from './src/WaterManager';


export default function App() {
  return (
    <View style={styles.container}>
      <WaterManager 
      dialWidth = {8}
      dialRadius={20}
      dialTextSize={20}
      value={120}
      dialTextColor= "#fff"
      radius={120} 
      strokeWidth={10} 
      strokeColor="#778DA9"
      fontColor="#3F88C5"
      fontSize={80}
      bulletColor="#EBF2FA"
      bulletRadius={40}
      meterColor="#0F084B"
      waterColor= "#A9CEF4"/>
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
