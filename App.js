import React from 'react';
import { StyleSheet, View } from 'react-native';
import WaterManager from './src/WaterManager';


export default function App(props) {
  const {
    disabled = false,
    dialWidth = 1,
    dialRadius = 40,
    dialColor = "#3c70a4",
    dialTextSize = 19,
    dialTextColor = '#fff',
    fillColor = 'none',
    fontSize = 30,
    fontColor = '#87c0cd',
    maxDial = 90,
    minDial = 0,
    meterColor = '#333',
    onChange = (e)=> {}, 
    onPress = () => {console.log('is presssed')}, 
    radius = 100,
    sizes = [1, 2, 3, 'Empty'],
    strokeWidth = 0,
    strokeColor = '#d9eeec',
    value = 40,
    volumen = 100,
    waterColor= '#eaf5ff',
  } = props;

  return (
    <View style={styles.container}>
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
    top: 30,
    left: 0,
    flex: 1,
    alignItems: 'center',
  },
});
