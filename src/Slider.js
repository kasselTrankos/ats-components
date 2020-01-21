import React, { Component, useState} from 'react'
import { PanResponder, View, Dimensions,Text } from 'react-native'
import Svg, { Path, Circle, G } from 'react-native-svg'





const polarToCartesian = (angle, radius, btnRadius) => {
  const hC = radius + btnRadius;
  const a = (angle-90) * Math.PI / 180.0;

  const x = hC + (radius * Math.cos(a));
  const y = hC + (radius * Math.sin(a));
  return {x, y};
}

const cartesianToPolar = (x,y, dialRadius, btnRadius) => {
  let hC = dialRadius + btnRadius;

  if (x === 0) {
    return y > hC ? 0 : 180;
  }
  else if (y === 0) {
    return x > hC ? 90 : 270;
  }
  else {
    return (Math.round((Math.atan((y-hC)/(x-hC)))*180/Math.PI) +
      (x>hC ? 90 : 270));
  }
};

const FuncSlider = props => {
  const {
    dialColor = '#000',
    dialRadius = 20,
    dialTextColor = '#fff',
    dialTextSize = 10,
    dialWidth =  5,
    fillColor = 'none',
    maxDial =  359,
    onChange = (e)=> {},
    strokeColor = '#fff',
    strokeWidth = 0.5,
    radius = 120,
    value = 120,
    prefix= '\'\''
  } = props;
  
  const [angle, setAngle ] = useState(value > maxDial ? maxDial : value);
  const panResponder = React.useMemo(() =>
  PanResponder.create({
    onStartShouldSetPanResponder: (e,gs) => true,
    onStartShouldSetPanResponderCapture: (e,gs) => true,
    onMoveShouldSetPanResponder: (e,gs) => true,
    onMoveShouldSetPanResponderCapture: (e,gs) => true,
    onPanResponderMove: event => {
      const x = event.nativeEvent.locationX.toFixed(2);
      const y = event.nativeEvent.locationY.toFixed(2);
      const dx = x - (radius + dialRadius);
      const dy = y - (radius + dialRadius);
      let newAngle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
      if  (newAngle < 0) newAngle = 360 + newAngle;
      
      setAngle(Math.round(newAngle));
    }
  }), []);
  const width = (radius + dialRadius) * 2;
  const startCoord = polarToCartesian(0, radius, dialRadius);
  const endCoord = polarToCartesian(angle, radius, dialRadius);
    return (
      <View>
         <Svg
        width={width}
        height={width}>
        <Circle r={radius}
          cx={width / 2}
          cy={width / 2}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill={fillColor}/>

        <Path stroke={dialColor}
          strokeWidth={dialWidth}
          fill='none'
          d={`M${startCoord.x} ${startCoord.y} A ${radius} ${radius} 0 ${angle > 180 ? 1 : 0} 1 ${endCoord.x} ${endCoord.y}`}/>

        <G x={endCoord.x-dialRadius} y={endCoord.y-dialRadius}>
          <Circle r={dialRadius}
            cx={dialRadius}
            cy={dialRadius}
            fill={dialColor}
            {...panResponder.panHandlers}/>
          <View 
            style={{
              left: endCoord.x - dialRadius * 2,
              top: endCoord.y - dialRadius,
              width: dialRadius * 4, 
              height: dialRadius * 2,
              justifyContent: 'center',
              textAlignVertical: 'center',
              // backgroundColor: 'lime',
              // opacity: 0.5,
            }}>
            <Text style={{
              // backgroundColor: 'red',
              textAlign: 'center',
              fontSize: dialTextSize,
              textAlignVertical:'center',
              lineHeight: dialRadius * 2,
              color: dialTextColor,
            }}>{angle}{prefix}</Text>
          </View>
        </G>
      </Svg>
      </View>
     );
};

export default FuncSlider;