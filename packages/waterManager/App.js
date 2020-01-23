import React from 'react';
import { StyleSheet, View } from 'react-native';
import WaterManager from './src/WaterManager';


export default function App() {
  return (
    <View style={styles.container}>
      <WaterManager 
      dialWidth = {8}
      dialColor="#5BC0EB"
      dialRadius={32}
      dialTextSize={22}
      dialTextColor= "#fff"
      maxDial={60}
      radius={140} 
      strokeWidth={10} 
      strokeColor="#3F88C5"
      fontColor="#3F88C5"
      fontSize={100}
      value={0}
      waterColor= "#A9CEF4"/>
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

