import React, {useState} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import Swipper from './src/swipper';
import Clock from './src/clock';


const addZero = (_, x) => x <= 9 ? `0${x}` : x;
const addSecondSymbol = x => `${x}'`

const App = props => {
  let time = {};
  let second = 0;
  const {
    style = {backgroundColor: '#E3E3E3', borderRadius: 10, width: '100%'},
    fontSize = 32,
    height = 60,
    width = 60,
    marginRight = 4,
    hours = Array.from({length: 24}, addZero),
    minutes = Array.from({length: 61}, addZero),
    seconds = Array.from({length: 61}, addZero),
    color =  '#264E70',
    fontWeight = 'bold',
    onChange = (e) => console.log('on change', e),
    onSave = e => console.log('on save', e),
    onSeconds = e => console.log('on seconds', e),
  } = props;
  const save = e => {
    onSave({time, second});
  }
  const onTime = e => {
    time = e;
    onChange(e);
  }
  const onSecond = e => {
    second = e;
    onSeconds(e);
  }
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginLeft: '10%'}}>
        <Clock
          style={{...style}}
          fontSize={fontSize}
          height={height}
          width={width}
          hours={hours}
          seconds={seconds}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          minutes={minutes}
          marginRight={marginRight}
          onChange={onTime}
        />
        <View style={{ width, height, marginLeft: '5%', height: '100%' }}>
          <Swipper
            style={{backgroundColor: 'none', color: 'red'}}
            height={height}
            width={width}
            fontSize={fontSize}
            color={color}
            onChange = {onSecond}
            values={Array.from({length: 24}, addZero).map(addSecondSymbol)} />
        </View>
      </View>
      <View style={{backgroundColor: 'red', marginTop: 20}}>
      <Button
        style={{marginTop: 40, width: '100%'}}
        title="Guardar 1"
        onPress={save}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 40,
    width: 300,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
  },
});

module.exports = App;
