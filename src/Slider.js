import React, { useState} from 'react'
import { PanResponder, View,Text } from 'react-native'
import Svg, { Path, Circle, G } from 'react-native-svg'
import {polarToCartesian, getAngleDegree, getRelativeValue, getRelativeDegree} from './../lib/math';

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
  const getAngleDegree = getRelativeDegree(maxDial);
  const [angle, setAngle ] = useState(getAngleDegree(Math.min(value, maxDial)));
  const getValue = getRelativeValue(maxDial);
  const [textValue, setTextValue] = useState(value);
  const width = (radius + dialRadius) * 2;
  useEffect(()=> {
    setAngle(getAngleDegree(Math.min(value, maxDial)));
    setTextValue(value);

  }, [value]);
  const panResponder = React.useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: ({nativeEvent}) => {
      const angle = getAngleDegree(nativeEvent, width / 2);
      setAngle(Math.round(angle));
      setTextValue(getValue(angle));
    },
    onPanResponderRelease: ()=> onChange(getValue(angle))
  }), []);
  const startCoord = polarToCartesian(0, radius, dialRadius);
  const endCoord = polarToCartesian(angle, radius, dialRadius);
  return (<View>
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
          }}>
          <Text style={{
            textAlign: 'center',
            fontSize: dialTextSize,
            textAlignVertical:'center',
            lineHeight: dialRadius * 2,
            color: dialTextColor,
          }}>{textValue}{prefix}</Text>
        </View>
      </G>
    </Svg>
  </View>);
};

export default FuncSlider;