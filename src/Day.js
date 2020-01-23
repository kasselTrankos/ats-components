import React from 'react';
import {Text} from 'react-native';
import {Svg, Rect} from 'react-native-svg';


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
    </Svg>

};

export default Day;