import React from 'react';
import { StyleSheet, View } from 'react-native';
import WaterManager from './src/WaterManager';


export default function App() {
  return (
      <View style={styles.container}>
        <WaterManager 
        dialWidth = {8}
        dialColor="#5BC0EB"
        dialRadius={30}
        dialTextSize={15}
        dialTextColor= "#fff"
        maxDial={180}
        radius={100} 
        strokeWidth={10} 
        strokeColor="#3F88C5"
        fontColor="#3F88C5"
        fontSize={60}
        value={1}
        waterColor= "#A9CEF4"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: 310,
    top: 30,
    left: 0,
    // height: 220,
    flex: 1,
    // width: 220,
    // position: 'relative',
    alignItems: 'center',
    backgroundColor: 'lime',
  },
});
