// @flow

import React, { useState, useRef } from 'react';
  import { View, Dimensions, PanResponder, ScrollView, Vibration } from 'react-native';
import Day from './Day';


const findCell = (rows, radius) => (x, y)=> {
  const right = Math.floor(x / radius);
  const bottom = Math.floor(y / radius);
  return right + rows * bottom;;
};
const lt = (dateA = new Date()) => dateB => +dateA > +dateB;
const getDay = daysInMonth => {
  let month = 0;
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const isPassedDate = lt();
  return value => {
    const lessDays = daysInMonth.reduce((acc, current, index)=> {
      if(index < month) {
        acc+=current;
      }
      return acc;
    } , 0);
    const day = value - lessDays;
    const current = new Date(new Date().getFullYear(), month, day);
    if(day===daysInMonth[month]) month ++;

    return {
      month: month,
      day: day,
      isToday: currentMonth === month && day === currentDay,
      isPassed: isPassedDate(current)
    }; 
  }
}

const getDaysMonth = () => {
  const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
  return Array.from({length: 12}).map((el, index) => daysInMonth(index+1, new Date().getFullYear()))
};


const Calendar = props => {
  const {
    amount = 200,
    rows = 7,
    colorDayText = '#192965',
    inactiveColor = '#fff',
    activeColor = '#2988B1',
    vibrationDuration = 100,
    passedDay = '#0f4c75',
    currentDay= '#edf7fa',
    onDates=()=>{},
    
  } = props;
  const getDate = getDay(getDaysMonth())
  const view = useRef();
  const [cellStart, setCellStart] = useState(0);
  const [height, setHeight] = useState(300);
  const [top, setTop] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [dragging, setDragging] = useState(true);
  const {width} = Dimensions.get('window');
  const radius = Math.round((width) / rows);
  const [days, setDays] = useState( Array(amount).fill().map((v, index) => {
    const {day, isToday, isPassed} = getDate(index + 1);
    return {
      selected: false, 
      key: index,
      day, isPassed, isToday
    };
  }));
  const onDatesSelected = () => {
    const selected = days.filter(({selected}) => selected);
    onDates([...selected]);
  };
  const onPress = key => {
    days[key].selected = !days[key].selected;
    setDays([...days]);
    onDatesSelected();
  }
  const activateDays = (start, end) => days.map(({selected, key, day, isPassed, isToday}) => ({
    selected: key >=start && key<=end, 
    key, day, isPassed, isToday
  }))
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
    onPanResponderRelease: () => {
      setDragging(true);
      onDatesSelected();
    },
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
    {days.map(({selected, key, day, isToday, isPassed}, index)=> <Day 
      onLongPress={handleMultiple}
      onPress={onPress}
      selected={selected}
      fillColor={ selected ? activeColor : inactiveColor}
      text={day}
      passedDay={passedDay}
      isToday={isToday}
      isPassed={isPassed}
      currentDay={currentDay}
      dataId={key}
      key={key}
      colorDayText={colorDayText}
      radius={radius} />)}
  </View></ScrollView>);
}

export default Calendar;

