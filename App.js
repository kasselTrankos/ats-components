import React, { Component } from 'react';
import {
  StyleSheet,
  View, Text
} from 'react-native';
import CircleSlider from './src';
export default class App extends Component<Props> {
  state = {
    value: 1,
    totalDays: 30,
    month: '',
    color: '#dee2e3',
    activeDates: [12, 6, 8, 18]
  };
  componentDidMount() {
    this.gettingInformation();
  }




  gettingInformation = () => {
    var date = new Date();
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var value = date.getDate();
    var totalDays = lastDay.getDate();
    this.setState({ value: value, totalDays: totalDays, month: month[date.getMonth()] })
    1
  }
  fun = (value) => {
    this.state.activeDates.indexOf(value) != -1 ? this.setState({ color: '#9281f7' }) : this.setState({ color: '#dee2e3' })
    this.setState({ value })
  }
  render() {
    const {radius = 90,
      limit = 60,
      start = 0,
      dotColor = '#9281f7', 
      btnColor='#b5ddfb',
      backgroundColor = '#dee2e3',
      direction ='CW',
      endGradient = '#b5ddfb',
      startGradient ='#b5ddfb',
      btnRadius = 14,
      dotSize = 7,
      sliderWidth = 17,
      fontSize = 80
    } = this.props;
    const top = (radius / 2) - (fontSize / 2) + sliderWidth * 2;
    var { value, totalDays} = this.state;
    return (<View style={styles.container}>
      <CircleSlider
        arcDirection={direction}
        backgroundColor={backgroundColor}
        btnRadius={btnRadius}
        dotColor={dotColor}
        dotSize={dotSize}
        btnColor={btnColor}
        sliderRadius={radius}
        sliderWidth={sliderWidth}
        startDegree={start}
        maxValue={limit}
        value={value}
        onValueChange={(value) => this.fun(value)}
        endGradient={endGradient}
        startGradient={startGradient}/>
        <Text style={{ ...StyleSheet.flatten(styles.text), top, fontSize }}>{value}</Text>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  text: {
    fontSize: 40,
    position: 'absolute',
    zIndex: 26,
    top: 20,
    width: '100%',
    textAlign: 'center'
  }
});