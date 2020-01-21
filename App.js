import React from 'react';
import { StyleSheet, View } from 'react-native';
import WaterManager from './src/WaterManager';


export default function App() {
  return (
    <View style={styles.container}>
      <WaterManager 
      bulletColor="#EBF2FA"
      bulletRadius={40}
      dialWidth = {8}
      dialColor="#5BC0EB"
      dialRadius={20}
      dialTextSize={20}
      dialTextColor= "#363636"
      maxDial={180}
      radius={150} 
      strokeWidth={10} 
      strokeColor="#778DA9"
      fontColor="#3F88C5"
      fontSize={80}
      value={0}
      waterColor= "#A9CEF4"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 300,
    top: 50,
    left: 0,
    position: 'relative',
    alignItems: 'center',
  },
});
