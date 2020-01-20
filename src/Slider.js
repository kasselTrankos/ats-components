import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import {Svg, Circle, Defs, Mask, Path, Rect, Use} from 'react-native-svg';

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) =>{
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};

const describeArc = (x, y, radius, startAngle, endAngle) =>{

  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
      "M", start.x, start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");

  return d;       
}

const Slider = props => {
  const [angle, setAngle] = useState(0)
  const {
    width = 100,
    strokeWidth = 3,
    strokeColor = '#ff0000'
  } = props;
  const radius = (width) / 2;
  const start = {x: radius, y: radius};
  const viewBox =`${strokeWidth * -1} ${(strokeWidth / 2) * -1 } ${(strokeWidth * 2 ) + width} ${(strokeWidth) + width}`;
  const d = describeArc(start.x, start.y, radius + (strokeWidth / 2), 0, 359)
  return <View style={{ width: '100%', height: '100%',}}>
    <Svg height="100%" width="100%" viewBox={viewBox}>
      <Path
        d={d}
        fill="none"
        stroke={strokeColor}
        strokeWidth = {strokeWidth}
      />

    </Svg>
  </View>
};

export default Slider;