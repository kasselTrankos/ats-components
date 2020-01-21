import React, { Component, useState} from 'react'
import { PanResponder, View, Dimensions } from 'react-native'
import Svg, { Path, Circle, G, Text } from 'react-native-svg'





const polarToCartesian = (angle, dialRadius, btnRadius) => {
  let r = dialRadius;
  let hC = dialRadius + btnRadius;
  let a = (angle-90) * Math.PI / 180.0;

  let x = hC + (r * Math.cos(a));
  let y = hC + (r * Math.sin(a));
  return {x,y};
}

const cartesianToPolar = (x,y, dialRadius, btnRadius) => {
  let hC = dialRadius + btnRadius;

  if (x === 0) {
    return y>hC ? 0 : 180;
  }
  else if (y === 0) {
    return x>hC ? 90 : 270;
  }
  else {
    return (Math.round((Math.atan((y-hC)/(x-hC)))*180/Math.PI) +
      (x>hC ? 90 : 270));
  }
};

const FuncSlider = props => {
  const {
    dialRadius = 20,
    dialWidth =  5,
    fillColor = 'none',
    xCenter = Dimensions.get('window').width / 2,
    yCenter = Dimensions.get('window').height / 2,
    min =  0,
    max =  359,
    strokeColor = '#fff',
    strokeWidth = 0.5,
    meterColor = '#000',
    radius = 120,
    dialTextColor = '#fff',
    dialTextSize = 10,
    value = 120
  } = props;
  const [angle, setAngle ] = useState(value);
  const panResponder = React.useMemo(() =>
  PanResponder.create({
    onStartShouldSetPanResponder: (e,gs) => true,
    onStartShouldSetPanResponderCapture: (e,gs) => true,
    onMoveShouldSetPanResponder: (e,gs) => true,
    onMoveShouldSetPanResponderCapture: (e,gs) => true,
    onPanResponderMove: (e,gs) => {
      const xOrigin = xCenter - (radius + dialRadius);
      const yOrigin = yCenter - (radius + dialRadius);
      const a = cartesianToPolar(gs.moveX-xOrigin, gs.moveY-yOrigin, radius, dialRadius);
      
      if (a <= min) {
        setAngle(min);
      } else if (a >= max) {
        setAngle(max);
      } else {
        setAngle(a);
      }
    }
  }), []);
  const width = (radius + dialRadius) * 2;
  let bR = dialRadius;
  let dR = radius;
  let startCoord = polarToCartesian(0, radius, dialRadius);
  let endCoord = polarToCartesian(angle, radius, dialRadius);
    return (
      <Svg
        width={width}
        height={width}>
        <Circle r={dR}
          cx={width / 2}
          cy={width / 2}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill={fillColor}/>

        <Path stroke={meterColor}
          strokeWidth={dialWidth}
          fill='none'
          d={`M${startCoord.x} ${startCoord.y} A ${dR} ${dR} 0 ${angle>180?1:0} 1 ${endCoord.x} ${endCoord.y}`}/>

        <G x={endCoord.x-bR} y={endCoord.y-bR}>
          <Circle r={bR}
            cx={bR}
            cy={bR}
            fill={meterColor}
            {...panResponder.panHandlers}/>
          <Text x={bR}
            y={bR+(dialTextSize/2)}
            fontSize={dialTextSize}
            fill={dialTextColor}
            textAnchor="middle">{angle}</Text>
        </G>
      </Svg>);
};

export default FuncSlider;