import React, {useState, useEffect} from 'react';
import { View, Animated, Easing, Text} from 'react-native';
import Svg, { Path} from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}
const rnd = arr => arr[Math.floor(Math.random()*arr.length)]
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



const Spiner = props => {
  const {
    dialWidth = 40,
    timeIn = 2000,
    timeOut = 700,
    radius =180,
    opacity = 0.5,
    backgroundColor = '#999',
    colors = ['#505AFC', '#8527B7', '#F2BE22']
  } = props;
  const spinerWheel = (color, index) => {
    const wheel  = new Animated.Value(0);
    const anim = () => {
      Animated.sequence([
        Animated.delay(500 * index),
        Animated.timing(
          wheel,
          {
            toValue: 1,
            duration: timeIn,
            useNativeDriver: true
          }
        ),
        Animated.timing(
          wheel,
          {
            toValue: 0,
            duration: timeOut,
            useNativeDriver: true
          }
        ),
      // Call on self when animation completes
      ]).start(anim);
    };
    const dRange = [];
    const iRange = [];
    const strokeWidth = Math.floor(Math.random() * dialWidth);
    const start = Math.floor(Math.random() * 360);
    const steps = start + 360;
    for (let i = start; i < steps; i++){
     
      dRange.push(describeArc(radius , radius, radius/2, start, 0 + i));
      iRange.push((i - start)/(360 -1));
    }
    const rotation = wheel.interpolate({
      inputRange: iRange,
      outputRange: dRange
    });
    return {jsx: 
      <AnimatedPath 
        key={index} 
        d={rotation}
        stroke={color} 
        strokeWidth={strokeWidth} fill="none"/>, fn: anim};
  }
  const anims = colors.map(spinerWheel);
  useEffect(() => {
    anims.forEach(({fn}) => fn())
  }, []);
  return ( <View style={{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <View
        style={{position: 'absolute', top:0, left: 0, backgroundColor, opacity}}
        width="100%"
        height="100%"
      ></View>
      <Svg
        width={radius * 2}
        height={radius *2}>
          {anims.map(({jsx}) => jsx)}
        </Svg>
      
    </View>
  );
};
export default Spiner;    

  
