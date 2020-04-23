import React from 'react';
import { View, Text} from 'react-native';
import Swipper from './swipper';

const HOURS_24 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const defaultProps = {
  style: {backgroundColor: 'blue', width: 80, height: 80},
  height: 80,
  width: 80,
  hours: HOURS_24,
  color: '#fff',
  fontSize: 24,
  value: {hour: '20', minute: '30', second: '00'},
  onChange: (e) => {}
};
const Clock = (props = defaultProps) => {
  const {onChange, fontSize, minutes, color, value,
    seconds, hours, width, height, marginRight} = props;
  let time = {...value};
  const setHours = e => {
    time.hour = e;
    onChange({...time});
  };
  const setMinutes = e => {
    time.minute = e;
    onChange({...time});
  };
  const setSeconds = e => {
    time.second = e;
    onChange({...time});
  };
  return (<View stye={{flex: 1, flexDirection: 'row',}}>
    <View style={{flexDirection: 'row'}}>
        <View style={{width, height, marginRight,}} >
          <Swipper
            {...props} values={hours} onChange={setHours} value={time.hour}/>
        </View>
        <Text style={{fontSize, textAlign:'center', 
          width: 20, lineHeight: height, color}}>:</Text>
        <View style={{width, height, marginRight}} >
          <Swipper
            {...props} values={minutes} onChange={setMinutes} value={time.minute} />
        </View>
        <Text style={{fontSize, textAlign:'center',
          width: 20, lineHeight: height, color}}>:</Text>
        <View style={{width, height}} >
          <Swipper
            {...props} values={seconds} onChange={setSeconds} value={time.second}/>
        </View>
      </View>
  </View>)
}
module.exports = Clock;