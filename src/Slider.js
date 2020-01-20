import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {Svg, Circle, Defs, Mask, Path, Rect, Use} from 'react-native-svg';

const Slider = props => {
  const [angle, setAngle] = useState(0)
  const radius = 50;
  const {
    top ='0%',
    color = '#EDC75C',
    startCoord =  {x: 0, y: 0},
    endCoord =  {x: 0, y: 0},
    dR = 90,
    
  } = props;
  return  <View style={{ aspectRatio: 1}}>
    <Svg height="100%" width="100%" viewBox="0 0 100 100" style={{outline: '1px solid red'}}>
    {/* <Path stroke={color}
      strokeWidth={radius}
      fill='none'
      d={`M${startCoord.x} ${startCoord.y} A ${dR} ${dR} 0 ${angle>180?1:0} 1 ${endCoord.x} ${endCoord.y}`}/> */}
    {/* <Path 
      strokeWidth={1}
      stroke={color}
      fill="none"
      d=" M 100, 100
      m -75, 0
      a 75,75 0 1,0 150,0
    a"  /> */}
      <Path
        d={`
          M 0, 50
          a 50,50 0 1,1 100,0
          a 50,50 0 1,1 -100,0
        `}
        fill="none"
        stroke="orange"
      />

    </Svg>
  </View>
};

export default Slider;