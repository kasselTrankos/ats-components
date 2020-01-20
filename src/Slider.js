import React, {useState} from 'react';
import { View, PanResponder } from 'react-native';
import {Svg, Path, Circle, G} from 'react-native-svg';
import Bullet from './Bullet';


const _polarToCartesian = (angle, dialRadius, btnRadius) => {
  let r = dialRadius;
  let hC = dialRadius + btnRadius;
  let a = (angle-90) * Math.PI / 180.0;

  let x = hC + (r * Math.cos(a));
  let y = hC + (r * Math.sin(a));
  return {x,y};
};

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) =>{
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

  const x =  centerX + (radius * Math.cos(angleInRadians));
  const y = centerY + (radius * Math.sin(angleInRadians));
  return { x, y,};
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
    strokeColor = '#ff0000',
    bulletRadius = 20,
    bulletColor = '#C05746',
  } = props;
  const radius = width / 2;
  const _w = width + bulletRadius; 
  const start = {x: radius, y: radius};
  const viewBox =`${strokeWidth * -1} ${(strokeWidth / 2) * -1 } ${(strokeWidth * 2 ) + width} ${(strokeWidth) + width}`;
  const d = describeArc(start.x, start.y, radius + (strokeWidth / 2), 0, 359);
  const bulletStart = {x:0, y: 0};
  console.log('2222', polarToCartesian(start.x, start.y, radius + bulletRadius, 359))
  const bullet  = polarToCartesian(start.x, start.y, radius  - bulletRadius, 359);
  // 
  console.log(bulletStart, '0000', bullet);

  return <View style={{ width: '100%', height: '100%',}}>
    <Svg height="100%" width="100%" viewBox={viewBox} style={{}}>
      <Path
        d={d}
        fill="none"
        stroke={strokeColor}
        strokeWidth = {strokeWidth}
      />
    </Svg>
    <Bullet 
      bulletColor={bulletColor}
      position={bullet}
      bulletRadius={bulletRadius}  />
  </View>
};

export default Slider;