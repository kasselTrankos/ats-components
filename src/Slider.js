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
    minDial =  0,
    maxDial =  359,
    onChange = (e)=> {},
    radius = 120,
    strokeColor = '#fff',
    strokeWidth = 0.5,
    xCenter = Dimensions.get('window').width / 2,
    yCenter = Dimensions.get('window').height / 2,
    value = 120
  } = props;
  
  const [angle, setAngle ] = useState(value > maxDial ? maxDial : value);
  const [circleCenterX, setCircleCenterX] = useState(0);
  const [circleCenterY, setCircleCenterY] = useState(0);
  const ref = React.useRef(null);
  const onLayout = () => {
    console.log(' pppppp ');
    setCircleCenter();
  }
  
  const setCircleCenter = () => {
    ref.current.measure((x, y, w, h, px , py) => {
      const halfOfContainer = dialRadius + radius;
      console.log('00000', px, py);
      setCircleCenterY(py + halfOfContainer);
      setCircleCenterX(px + halfOfContainer);
    });
  }
  const panResponder = React.useMemo(() =>
  PanResponder.create({
    onStartShouldSetPanResponder: (e,gs) => true,
    onStartShouldSetPanResponderCapture: (e,gs) => true,
    onMoveShouldSetPanResponder: (e,gs) => true,
    onMoveShouldSetPanResponderCapture: (e,gs) => true,
    onPanResponderMove: (e,gs) => {
      // console.log(ref.current, '00000000000');
      // let refX, refY;
      // ref.current.measure( (fx, fy, width, height, px, py) => {
      //   // console.log('Component width is: ' + width)
      //   // console.log('Component height is: ' + height)
      //   // console.log('X offset to frame: ' + fx)
      //   // console.log('Y offset to frame: ' + fy)
      //   // console.log('X offset to page: ' + px)
      //   // console.log('Y offset to page: ' + py)
      //   // refX = px;
      //   // refY = py;
      //   // console.log(refX, refY, '12222222');
      //   console.log(px, py, '1111111', xCenter, yCenter);
      // });   
      const xOrigin = xCenter - (radius + dialRadius);
      const yOrigin = yCenter - (radius + dialRadius);
      const a = cartesianToPolar(gs.moveX-xOrigin, gs.moveY-yOrigin, radius, dialRadius);
      if (a <= minDial) {
        setAngle(minDial);
        onChange(minDial);
      } else if (a >= maxDial) {
        setAngle(maxDial);
        onChange(maxDial);
      } else {
        setAngle(a);
        onChange(a);
      }
    }
  }), []);
  const width = (radius + dialRadius) * 2;
  const startCoord = polarToCartesian(0, radius, dialRadius);
  const endCoord = polarToCartesian(angle, radius, dialRadius);
    return (
      <View onLayout={onLayout}>
         <Svg
        width={width}
        height={width}
        ref={ref}>
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
              }}>{angle}</Text>
            </View>
        </G>
      </Svg>
      </View>
     );
};

export default FuncSlider;