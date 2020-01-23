import React from 'react';
import {TouchableWithoutFeedback, Text} from 'react-native';
import {Svg, Circle} from 'react-native-svg';


const Day = props => {
  const {
    onPress= ()=> {},
    onLongPress= ()=> {}, 
    radius = 10,
    fillColor = '#AF5D7C',
    text = 0,
    selected = false,
    delayLongPress = 200
  } = props;
  // const width = radius * 2;
  return <TouchableWithoutFeedback 
    delayLongPress={delayLongPress}
    onPress={onPress}
    onLongPress={onLongPress}>
    <Svg
      style={{}}
      width={radius}
      height={radius}>
      <Circle 
        r={radius /2}
        cx={radius /2}
        cy={radius /2}
        fill={fillColor} />
      <Text style={{top: radius/2, left: radius/2, color: '#fff'}}>{text}</Text>
    </Svg>
    </TouchableWithoutFeedback>

};

export default Day;