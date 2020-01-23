// @flow

import React, { Component } from "react";
import { View } from 'react-native';
import Calendar from "./src/Calendar.js";

const onDates = (dates)=> {};

const App = props => <View style={{top: 40, flex: 1}}>
    <Calendar
      onDates={onDates}
      inactiveColor="#f1f9f9"
      colorDayText = "#192965"
      passedDay = "#ebe6e6"
      currentDay= "#9aceff" />
  </View>

export default App;
