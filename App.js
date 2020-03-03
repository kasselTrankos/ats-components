import React, {useState} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import Swipper from './src/swipper';
import Clock from './src/clock';


const addZero = (_, x) => x <= 9 ? `0${x}` : String(x);

const App = props => {
  
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
    value = {hour: '20', minute: '30', second: '00', duration: '15'},
    onChange = (e) => console.log('on change', e),
    onSave = e => console.log('on save', e),
    onDuration = e => console.log('on seconds', e),
  } = props;
  let time = Object.assign({}, {hour: value.hour, minute: value.minute, second: value.second});
  let duration = value.duration || '00';
  const save = e => {
    onSave({time, duration});
  }
  const onTime = e => {
    time = e;
    onChange(e);
  }
  const onSelDuration = e => {
    duration = e;
    onDuration(e);
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
          value={{ hour: value.hour, minute: value.minute, second: value.second }}
        />
        <View style={{ width, height, marginLeft: '5%', height: '100%' }}>
          <Swipper
            style={{backgroundColor: 'none', color: 'red'}}
            height={height}
            width={width}
            fontSize={fontSize}
            color={color}
            onChange = {onSelDuration}
            value={value.duration}
            values={Array.from({length: 24}, addZero)} />
        </View>
      </View>
      <View style={{marginTop: 20}}>
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
