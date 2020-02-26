import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Clock from './src/clock';

const HOURS_24 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

const App = props => {
  const {
    style = {backgroundColor: '#E3E3E3', borderRadius: 10},
    fontSize = 40,
    height = 70,
    width = 70,
    marginRight = 10,
    hours = HOURS_24.map(x => x<=9 ? `0${x}` : x),
    minutes = Array.from({length: 61}, (_, x) => x<=9 ? `0${x}` : x),
    seconds = Array.from({length: 61}, (_, x) => x<=9 ? `0${x}` : x),
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
    flex:1,
    
    backgroundColor: '#ff0099',
  },
});

module.exports = App;
