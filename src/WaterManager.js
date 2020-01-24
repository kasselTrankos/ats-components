import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Water from './Water';
import Slider from './Slider';



const WaterManager  = props => {
  const {
    disabled = false,
    dialWidth = 9,
    dialRadius = 20,
    dialColor = "#5BC0EB",
    dialTextSize = 19,
    dialTextColor = '#fff',
    fillColor = 'none',
    fontSize = 90,
    fontColor = '#1B263B',
    maxDial = 360,
    minDial = 0,
    meterColor = '#333',
    onChange = (e)=> {}, 
    onPress = () => {console.log('is presssed')}, 
    radius = 140,
    sizes = [1, 2, 3, 'Empty'],
    strokeWidth = 3,
    strokeColor = '#A31E27',
    value = 120,
    volumen = 100,
    waterColor= '#A9CEF4',
  } = props;
  const width = radius * 2;
  const height = radius * 2;
  return <TouchableHighlight
    disabled={disabled} 
    onPress={onPress}
    underlayColor="white"
    style={{
      position: 'absolute', 
      top: 0, 
      flex: 1,
      width: width + 90,
      height: height + dialRadius * 2,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <View style={{ width, height: (height + dialRadius * 2), top: 0,}}>
      <View style={{
          top: dialRadius,
          left: 0,
          position: 'absolute',
          // width: width,
          // height: width,
        }}>
        <Water
          radius={radius}
          onPress={onPress}
          volumen={100 - volumen} 
          backgroundColor={waterColor} />
      </View>
      <View>
        <Text style={{
          position: 'absolute',
          fontSize, 
          height: radius * 2 + dialRadius * 2,
          // textAlignVertical: 'bottom',
          width: '100%', 
          top: radius * 2 - fontSize + strokeWidth, 
          textAlign: 'center', 
          color: fontColor,
          }}>{`${volumen}%`}</Text>
      </View>
      <View style={{left: -dialRadius, top: 0}}>
        <Slider 
          dialColor={dialColor}
          dialRadius={dialRadius}
          dialTextSize={dialTextSize}
          dialTextColor={dialTextColor}
          dialWidth={dialWidth}
          fillColor = {fillColor}
          maxDial={maxDial}
          meterColor={meterColor}
          minDial={minDial}
          onChange={onChange}
          strokeWidth={strokeWidth} 
          strokeColor={strokeColor} 
          radius = {radius}
          value={value} />
      </View>
    </View>

  </TouchableHighlight>
};


export default WaterManager;