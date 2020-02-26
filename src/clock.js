import React from 'react';
import { View } from 'react-native';
import Swipper from './swipper';

const HOURS_24 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const defaultProps = {
  style: {backgroundColor: 'blue', width: 80, height: 80},
  height: 80,
  width: 80,
  hours: HOURS_24,
  color: '#fff',
  fontSize: 24,
  onChange: (e) => {}
};
const Clock = (props = defaultProps) => {
  const {onChange, minutes, seconds, hours, width, height, marginRight} = props;
  let time = {hour: 0, minute: 0, second: 0};
  const setHour = e => {
    time.hour = e;
    onChange(time);
  };
  const setMinutes = e => {
    time.minutes = e;
    onChange(time);
  };
  const setSeconds = e => {
    time.seconds = e;
    onChange(time);
  };
  return (<View stye={{flex: 1, flexDirection: 'row',}}>
    <View style={{flexDirection: 'row'}}>
        <View style={{width, height, marginRight,}} >
          <Swipper
            {...props} values={hours} onChange={setHour}/>
        </View>
        <View style={{width, height, marginRight}} >
          <Swipper
            {...props} values={minutes} onChange={setMinutes} />
        </View>
        <View style={{width, height}} >
          <Swipper
            {...props} values={seconds} onChange={setSeconds} />
        </View>
      </View>
  </View>)
}
module.exports = Clock;