import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Water from './Water';
import Slider from './Slider';



const WaterManager  = props => {
  const {
    btnRadius = 20,
    bulletColor = '#99A1AE',
    bulletRadius = 30,
    dialWidth = 9,
    dialRadius =20,
    dialTextSize = 19,
    dialTextColor = '#fff',
    fillColor = 'none',
    fontSize = 90,
    fontColor = '#1B263B',
    meterColor = '#333',
    radius = 140,
    sizes = [1, 2, 3, 'Empty'],
    strokeWidth = 3,
    strokeColor = '#A31E27',
    value = 120,
    volumen = 100,
    waterColor= '#A9CEF4',
  } = props;
  const width = (radius) *2
  const height = (radius) *2
  return <View style={{
    position: 'relative', 
    top: 0, 
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
    width: '100%', 
    height: '100%',
    backgroundColor: 'red'}}>
    <View style={{ ...StyleSheet.flatten(styles.traker), width, height}}>
      <View style={{
          top: 0,
          left: 0,
          position: 'absolute',
          width: width,
          height: width,
        }}>
        <Water volumen={100 - volumen} backgroundColor={waterColor} />
      </View>
      <View>
      <Text style={{flex: 1, position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center', 
        fontSize, 
        width, 
        top: height / 4, 
        textAlign: 'center', 
        color: fontColor}}>{`${volumen}%`}</Text>
      </View>
      <View style={{left: -btnRadius, top: -btnRadius}}>
        <Slider 
          bulletRadius={bulletRadius}
          bulletColor={bulletColor}
          dialRadius={dialRadius}
          dialTextSize={dialTextSize}
          dialTextColor={dialTextColor}
          dialWidth={dialWidth}
          fillColor = {fillColor}
          meterColor={meterColor}
          strokeWidth={strokeWidth} 
          strokeColor={strokeColor} 
          radius = {radius}
          value={value} />
      </View>
    </View>

  </View>
};
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // flex: 1,
  },
});


export default WaterManager;