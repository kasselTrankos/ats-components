import React, { Componnent } from 'react';
import { View, StyleSheet } from 'react-native';
import {Svg, Circle, Defs, Mask, Path, Rect, Use} from 'react-native-svg';

const Water = props => {
  const radius = 50;
  const {
    top ='0%',
    backgroundColor = '#EDC75C',
    
  } = props;
  return (
    <View style={{ aspectRatio: 1}}>
      <Svg height="100%" width="100%" viewBox="0 0 100 100" style={{outline: '1px solid red'}}>
      <Defs>  
        <Mask 
          id="Mask" 
          x="0" 
          y={top} 
          width="100%" 
          height="100%">  
          <Rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="#fff"
            strokeWidth="0"
            stroke={backgroundColor}
            maskUnits="userSpaceOnUse"
          />
        </Mask>  
        <Circle 
          id="Circle"
          r={radius} 
          cx={radius} 
          cy={radius}
          fill-opacity="1"
          fill={backgroundColor} />
      </Defs>
      <Use href="#Circle" mask="url(#Mask)" />
      </Svg>
    </View>
  );
}


export default Water;