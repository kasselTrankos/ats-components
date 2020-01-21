import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Water from './Water';
import Slider from './Slider';



const WaterManager  = props => {
  const {
    radius = 110,
    volumen = 100,
    strokeWidth = 3,
    strokeColor = '#A31E27',
    sizes = [1, 2, 3, 'Empty'],
    fontSize = 90,
    fontColor = '#1B263B',
    waterColor= '#A9CEF4',
    bulletRadius = 30,
    bulletColor = '#99A1AE',
    fillColor = 'none'
  } = props;
  const width = radius - (bulletRadius / 2);
  const height = radius - (bulletRadius / 2);
  const sliderWidth = radius;
  const sliderHeight = radius;
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
      <View style={{position: 'absolute', top: 0, left: 0}}>
        <Slider 
          bulletRadius={bulletRadius}
          bulletColor={bulletColor}
          strokeWidth={strokeWidth} 
          strokeColor={strokeColor} 
          fillColor = {fillColor}
          dialRadius={120} />
      </View>
    </View>

  </View>
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
});


export default WaterManager;