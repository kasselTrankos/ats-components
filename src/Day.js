import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Svg, Circle} from 'react-native-svg';


const Day = props => {
  const {
    radius = 10,
    fillColor = '#999',
    text = 0
  } = props;
  const width = radius * 2;
  console.log(width);
  return <TouchableOpacity onPress={()=> console.log('00011111')}>
      <Svg
      style={{marginRight: 2, marginBottom: 2}}
      width={width}
      height={width}>
      <Circle 
        r={radius}
        cx={radius}
        cy={radius}
        fill={fillColor} />
      <Text>{text}</Text>
    </Svg>
    
    
    </TouchableOpacity>

};

export default Day;