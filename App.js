import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Clock from './src/clock';


const addZero = (_, x) => x <= 9 ? `0${x}` : x;

const App = props => {
  const {
    style = {backgroundColor: '#E3E3E3', borderRadius: 10},
    fontSize = 32,
    height = 60,
    width = 60,
    marginRight = 4,
    hours = Array.from({length: 24}, addZero),
    minutes = Array.from({length: 61}, addZero),
    seconds = Array.from({length: 61}, addZero),
    color =  '#264E70',
    fontWeight = 'bold',
    onChange = (e) => console.log('hh', e)
  } = props;
  return (
    <View style={styles.container}>
      <Clock
        style={{...style}}
        fontSize={fontSize}
        height={height}
        width={width}
        hours={hours}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        minutes={minutes}
        marginRight={marginRight}
        seconds={seconds}
        onChange={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 40,
    width: 300,
    
    backgroundColor: '#ff0099',
  },
});

module.exports = App;
