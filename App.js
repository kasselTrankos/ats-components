import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Slider from './src';
export default class CircleSlider extends Component<Props> {
  state = {
    value: 1,
    color: '#dee2e3',
  };
  render() {
    const {
      radius = 70,
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
      fontSize = 70,
      marginTop = 40
    } = this.props;
    const top = (radius / 2) - (fontSize / 2) + (sliderWidth * 2) - (marginTop / 4);
    var { value } = this.state;
    return (<View style={{ ...StyleSheet.flatten(styles.container), marginTop }}>
      <Slider
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
        onValueChange={(value) => this.setState({ value })}
        endGradient={endGradient}
        startGradient={startGradient}/>
        <Text style={{ ...StyleSheet.flatten(styles.text), top, fontSize }}>{value}</Text>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 40,
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