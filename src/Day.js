import React from 'react';
import {Text} from 'react-native';
import {Svg, Circle} from 'react-native-svg';


const Day = props => {
  const {
    radius = 10,
    fillColor = '#AF5D7C',
    text = 0,
  } = props;
  return <Svg
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

};

export default Day;