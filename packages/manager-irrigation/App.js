import React, {useState} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import Swipper from './src/swipper';
import Clock from './src/clock';


const addZero = (_, x) => x <= 9 ? `0${x}` : String(x);

const App = props => {
  
  const {
    style = { backgroundColor: '#E3E3E3', borderRadius: 10, width: '100%' },
    fontSize = 32,
    height = 60,
    width = 60,
    marginRight = 4,
    hours = Array.from({length: 24}, addZero),
    minutes = Array.from({length: 61}, addZero),
    seconds = Array.from({length: 61}, addZero),
    color =  '#264E70',
    fontWeight = 'bold',
    value = { hour: '20', minute: '30', second: '00', duration: '15' },
    onChange = (e) => console.log('on change', e),
    onSave = e => console.log('on save', e),
    onChangeDuration = e => console.log('on seconds', e),
    buttonText = 'Guardar',
    buttonColor = '#841584',
  } = props;
  const [time, setTime] = useState({hour: value.hour, minute: value.minute, second: value.second});
  const [duration, setDuration] = useState(value.duration);
  const save = e => {
    onSave({...time, duration});
  }
  const onTime = e => {
    setTime(e);
    onChange({...e, duration});
  }
  const onSelDuration = e => {
    setDuration(e);
    onChange({...time, duration: e});
    onChangeDuration(duration);
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
          value={{ ...time }}
        />
        <View style={{ width, height, marginLeft: '5%', height: '100%' }}>
          <Swipper
            style={{backgroundColor: 'none', color: 'red'}}
            height={height}
            width={width}
            fontSize={fontSize}
            color={color}
            onChange = {onSelDuration}
            value={duration}
            values={Array.from({length: 24}, addZero)} />
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Button
          style={{marginTop: 40, width: '100%'}}
          color={buttonColor}
          title={buttonText}
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
