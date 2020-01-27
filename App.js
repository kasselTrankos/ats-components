// @flow

import React from "react";
import { View } from 'react-native';
import Calendar from "./src/Calendar.js";


const App = props =>{ 
  const {
    rows = 7,
    top = 100,
    left = 0,
    height = 340,
    amount = 210,
    width = '100%',
    activeColor = '#2988B1',
    colorDayText = '#192965',
    inactiveColor = '#fff',
    vibrationDuration= 100,
    passedDay ='#0f4c75',
    currentDay ='#edf7fa',
    onDates= (e) => {}
  } = props;
  return <View style={{
    flex: 1, 
    position: 'absolute', 
    height, top, width, left
    }}>
    <Calendar
      rows={rows}
      onDates={onDates}
      amount = {amount}
      colorDayText = {colorDayText}
      inactiveColor = {inactiveColor}
      activeColor = {activeColor}
      vibrationDuration = {vibrationDuration}
      passedDay = {passedDay}
      currentDay= {currentDay} />
  </View>}

export default App;
