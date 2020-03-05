import React, { useEffect } from 'react';
import { ScrollView, Text, Animated, PanResponder } from 'react-native';

const HOURS_24 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const Swipper = props => {

  const {
    style = {backgroundColor: 'red', width: 80, height: 80},
    height = 80,
    width = 80,
    values = HOURS_24,
    color = '#fff',
    fontSize = 24,
    fontWeight = 'bold',
    onChange= e => {},
    value = 0,
  } = props;
  const [pan] = useState(new Animated.ValueXY());
  const pos = values.indexOf(String(value));
  const SPRING_CONFIG = {tension: 8, friction: 4, useNativeDriver: true}; //Soft spring
  let position = pos >= 0? pos * -1 : 0;
  
  useEffect(()=> {
    
    Animated.spring(pan, {
      ...SPRING_CONFIG,
      toValue: {x: 0, y: position * height}
    }).start();
  }, []);
  const limit = -1 * (values.length -1);
  const scrollEnabled = false;
  let dy = 0;
  const panResponder = React.useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: (_, {dy}) => {
      dy = dy;
    },
    onPanResponderRelease: (_, {dy: end}) => {
      const move = dy < end ? -1 : 1;
      position+=move;
      if(position> 0) position = limit
      if(position < limit) position =  0;
      Animated.spring(pan, {
        ...SPRING_CONFIG,
        toValue: {x: 0, y: position * height}
      }).start();
      onChange(values[Math.abs(position)]);
    },
  }));
  return (<ScrollView
      style={{...style, width, height, }}
      scrollEnabled={scrollEnabled}
      {...panResponder.panHandlers}>
      <Animated.View 
        style={{transform: pan.getTranslateTransform(), 
          width, height, y: position * height}}>
        {values.map(el =><Text 
          style={{fontSize, color,  width, lineHeight: height, fontWeight, textAlign: 'center'}}
          key={el}>{el}</Text>)}
      </Animated.View>
    </ScrollView>)
}
module.exports = Swipper;