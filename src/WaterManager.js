import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Water from './Water';
import Slider from './Slider';



const WaterManager  = props => {
  const {
    radius = 200,
    volumen = 100,
    strokeWidth = 3,
    strokeColor = '#A31E27',
    sizes = [1, 2, 3, 'Empty'],
    fontSize = 90,
    fontColor = '#1B263B',
    waterColor= '#A9CEF4'
  } = props;
  const width = radius;
  const height = radius;
  const textRef = React.createRef();
  const circleRef = React.createRef();
  console.log(textRef);
  return <View style={{position: 'relative', top: 0, flex: 1, alignItems: 'center',justifyContent: 'center', width: '100%', height: '100%'}}>
    <View style={{ ...StyleSheet.flatten(styles.traker), width, height}}>
      <View style={{
          top: 0,
          left: 0,
          position: 'absolute',
          width,
          height,
        }}>
        <Water volumen={100 - volumen} backgroundColor={waterColor} ref={circleRef} />
      </View>
      <View>
      <Text style={{flex: 1, position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center', fontSize, width, top: height / 4, textAlign: 'center', color: fontColor}} ref={textRef}>{`${volumen}%`}</Text>
      </View>
      <View style={{position: 'absolute', top: 0, left: 0, height, width,}}>
        <Slider strokeWidth={strokeWidth} strokeColor={strokeColor} width={radius} />
      </View>
    </View>

  </View>
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,top: 190
  },
});


export default WaterManager;