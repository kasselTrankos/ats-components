import React from 'react';
import { StyleSheet, View } from 'react-native';
import Spiner from './src/spiner';

export default function CircleSpinner(props) {
  const {
    dialWidth = 40,
    timeIn = 2000,
    timeOut = 700,
    radius =180,
    colors = ['#C004D9', '#505AFC', '#8527B7', '#F2BE22', '#90D948'],
    opacity = 0.5,
    backgroundColor = '#333',
  } = props;
  return (
    <View style={styles.container}>
      <Spiner 
        dialWidth ={dialWidth}
        timeIn={timeIn}
        timeOut={timeOut}
        radius={radius}
        colors={colors}
        opacity={opacity}
        backgroundColor={backgroundColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
