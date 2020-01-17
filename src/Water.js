import React, { Componnent } from 'react';
import { View, StyleSheet } from 'react-native';
import {Svg, Circle, Defs, Mask, Path, Rect, Use} from 'react-native-svg';

const Water = props => {
  const radius = 50;
  const {
    background = '#000',
    borderWidth = 0,
    borderColor = '#333',
    
  } = props;
  return (
    <View style={{ aspectRatio: 1}}>
      <Svg height="100%" width="100%" viewBox="0 0 100 100" style={{backgroundColor: '#eee', outline: '1px solid red'}}>
      <Defs>  
        <Mask 
          id="Mask" 
          x="0" 
          y="0" 
          width="100%" 
          height="100%">  
          <Rect
            x="0"
            y="0"
            width="100%"
            height="50"
            fill="rgb(0,0,255)"
            strokeWidth="0"
            stroke="rgb(0,0,0)"
            maskUnits="userSpaceOnUse"
          />
        </Mask>  
        <Circle 
          id="Circle"
          r={radius} 
          cx={radius} 
          cy={radius} 
          fill={background} />
      </Defs>
      <Use href="#Circle" fill="green" mask="url(#Mask)" />
      {/* <Circle 
        r={radius} 
        cx={radius} 
        cy={radius} 
        fill={background} /> */}
      </Svg>
    </View>
  );
}


export default Water;