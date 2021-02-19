import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WaterManager from './src/watermanager';

export default function App(props) {
  const {
    top =0,
    left=  0,
    disabled = false,
    dialWidth = 1,
    dialRadius = 40,
    dialColor = "#3c70a4",
    dialTextSize = 19,
    dialTextColor = '#fff',
    fillColor = 'none',
    fontSize = 30,
    fontColor = '#87c0cd',
    maxDial = 360,
    minDial = 0,
    meterColor = '#333',
    onChange = (e)=> {}, 
    onPress = () => {console.log('is presssed')}, 
    radius = 100,
    sizes = [1, 2, 3, 'Empty'],
    strokeWidth = 0,
    strokeColor = '#d9eeec',
    value = 120,
    volumen = 100,
    waterColor= '#eaf5ff',
  } = props;

  return (
    <View style={{top, left, flex: 1, alignItems: 'center'}}>
    <WaterManager
    minDial={minDial}
    onChange={onChange}
    onPress={onPress}
    sizes={sizes}
    fillColor={fillColor}
    volumen={volumen}
    meterColor={meterColor}
    disabled={disabled}
    dialWidth = {dialWidth}
    dialColor={dialColor}
    dialRadius={dialRadius}
    dialTextSize={dialTextSize}
    dialTextColor= {dialTextColor}
    maxDial={maxDial}
    radius={radius} 
    strokeWidth={strokeWidth} 
    strokeColor={strokeColor}
    fontColor={fontColor}
    fontSize={fontSize}
    value={value}
    waterColor= {waterColor} />
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