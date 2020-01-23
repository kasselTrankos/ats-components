import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import {Svg, Rect} from 'react-native-svg';



const Day = props => {
  const {
    radius = 10,
    fillColor = '#AF5D7C',
    text = 0,
    onLongPress = ()=> {}
  } = props;
  return <TouchableWithoutFeedback
    style={{
      backgroundColor: 'red',
      width: 100,
      height: 100,
      flex: 1
    }}
    onLongPress={onLongPress}
  ><Svg
      style={{}}
      width={radius}
      height={radius}>
        <Rect
          x={1}
          y={1}
          width={radius}
          height={radius}
          fill={fillColor}
          rx={8}
        />
      {/* <Circle 
        r={radius /2}
        cx={radius /2}
        cy={radius /2}
        fill={fillColor} /> */}
      <Text style={{top: radius/2, left: radius/2, color: '#fff'}}>{text}</Text>
    </Svg></TouchableWithoutFeedback>

};

export default Day;