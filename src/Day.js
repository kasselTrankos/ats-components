import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Svg, Circle} from 'react-native-svg';


const Day = props => {
  const {
    radius = 10,
    fillColor = '#999',
    text = 0
  } = props;
  // const width = radius * 2;
  // console.log(width);
  return <TouchableOpacity onPress={()=> console.log('00011111')}>
      <Svg
      style={{}}
      width={radius}
      height={radius}>
      <Circle 
        r={radius /2}
        cx={radius /2}
        cy={radius /2}
        fill={fillColor} />
      <Text style={{top: radius/2, left: radius/2}}>{text}</Text>
    </Svg>
    
    
    </TouchableOpacity>

};

export default Day;