import React, { Componnent } from 'react';
import { View, StyleSheet } from 'react-native';
import {Svg, Circle, Defs, Mask, Path, Rect, Use, Line, TextPath} from 'react-native-svg';

// const line = value => <Svg height="100" width="200">
// <Line x1="60" y1="10" x2="140" y2="10" stroke="#060" />
// </Svg>

const Water = props => {
  const radius = 50;
  const {
    volumen ='0%',
    backgroundColor = '#EDC75C',
    sizes = [1, 2, 3, 'Empty']
  } = props;
  return (
    <View style={{ aspectRatio: 1, }}>
      <Svg height="100%" width="100%" viewBox="0 0 100 100">
      <Defs>  
        <Mask 
          id="Mask" 
          x="0" 
          y={volumen} 
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
      {/* <View style={{position: 'absolute', top: 0, left: 0}}>
        {sizes.map(line)}
      </View> */}
    </View>
  );
}


export default Water;