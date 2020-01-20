import React from 'react';
import { StyleSheet, View } from 'react-native';
import Water from './Water';
import Slider from './Slider';


const WaterManager  = props => {
  const {
    radius = 200,
    volumen = 100,
    strokeWidth = 3,
  } = props;
  const width = radius;
  const height = radius;
  const top = `${100 - volumen}%`;
  return <View style={{position: 'relative', flex: 1, alignItems: 'center',justifyContent: 'center', width: '100%', height: '100%'}}>
    <View style={{ ...StyleSheet.flatten(styles.traker), width, height}}>
      <View style={{
          top: 0,
          left: 0,
          position: 'absolute',
          width,
          height,
        }}>
        <Water top={top} backgroundColor="#06AED5" />
        </View>
        <View style={{position: 'absolute', top: 0, left: 0, height, width,}}>
          <Slider strokeWidth={strokeWidth} strokeColor="#999" width={radius} />
        </View>
    </View>

  </View>
};
const styles = StyleSheet.create({
  container: {
  },
});


export default WaterManager;