// @flow

import React, { useState, useRef } from 'react';
  import { View, Dimensions, PanResponder, ScrollView, Vibration } from 'react-native';
import Day from './Day';


const findCell = (rows, radius) => (x, y)=> {
  const right = Math.floor(x / radius);
  const bottom = Math.floor(y / radius);
  return right + rows * bottom;;
};

const Calendar = props => {
  const {
    amount = 200,
    rows = 7,
    inactiveColor = '#1A1B4B',
    activeColor = '#2988B1',
    vibrationDuration = 100
    
  } = props;
  const view = useRef();
  const [cellStart, setCellStart] = useState(0);
  const [height, setHeight] = useState(300);
  const [top, setTop] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [dragging, setDragging] = useState(true);
  const {width} = Dimensions.get('window');
  const radius = Math.round((width) / rows);
  const [days, setDays] = useState( Array.from({length: amount}, (v, i) => ({
    selected: false, 
    key: i,
  })));
  const onPresent = evt => view.current.measure((x, y, width, height, pageX, pageY) =>{
    setTop(pageY);
    setHeight(height);
  });
  
  const inside = (x, y) => x >= top && y <= height +top;
  const handleScroll = e => {
    setScrollTop(Number(e.nativeEvent.contentOffset.y));
  }
  const handleMultiple = ()=> {
    Vibration.vibrate(vibrationDuration);
    setDragging(false)
  };
  const getCell = findCell(rows, radius);
  const activateDays = (start, end) => days.map((day, index) => ({selected: index >=start && index<=end, key: index}))
  const panResponde = PanResponder.create({
    // prevent children interactuact prevented.
    onMoveShouldSetPanResponderCapture: ({nativeEvent: {pageX, pageY}}) => inside(pageX, pageY) && !dragging,
    onPanResponderGrant: ({nativeEvent: {pageX = 0, pageY = 0}}) => {
      const _top = Number(scrollTop.toFixed(0)) + Number(pageY.toFixed(0)) - Number(top);
      setCellStart(getCell(pageX.toFixed(0), _top));
      setDays([...activateDays(cellStart, cellStart)])
    },
    onPanResponderMove: ({nativeEvent: {pageX = 0, pageY = 0}}) => {
        const _top = Number(scrollTop.toFixed(0)) + Number(pageY.toFixed(0)) - Number(top);
        const cellEnd =  getCell(pageX.toFixed(0), _top);
        const start = Math.min(cellStart, cellEnd);
        const end = Math.max(cellStart, cellEnd);
        setDays([...activateDays(start, end)]);
    },
    onPanResponderRelease: () => setDragging(true),
    onPanResponderTerminationRequest: () => true,
  });
  
  return (<ScrollView
    onScroll={handleScroll}
    style={{
      position: 'absolute',
      height: 300,
      width: '100%',
    }}>
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      top: 0,
      width: '100%',
      height: '100%',
    }}
    ref={view}
    onLayout={onPresent}
    {...panResponde.panHandlers}>
      {days.map(({selected, key}, index)=> <Day 
        onLongPress={handleMultiple}
        selected={selected}
        fillColor={ selected ? activeColor : inactiveColor}
        text={`${key+1}`}
        key={key}
        radius={radius} />)}
  </View></ScrollView>);
}

export default Calendar;

