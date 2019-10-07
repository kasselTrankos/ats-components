//Component for made little step
import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import {vh} from 'react-native-expo-viewport-units';
import { Text, Content } from 'native-base';
const Props = {};
export class StepsIrrigation extends Component<Props> {
constructor(props) {
  super(props);
}


render() {
  const { steps = [], style = {}, text='----' } = this.props;
  
  return (
    <View style={style}>
      {steps.map((step) =>
        <Content contentContainerStyle={styles.step} 
          key={`${text}-${step}-iriirg`}>
          <Text style={Object.assign({}, styles.text, styles.stepText)}>{text}</Text>
          <Text style={styles.text}>{step}</Text>
        </Content>
      )}
    </View>);
  }
}
const styles = StyleSheet.create({
  container: {
    position:'relative',
    width: '100%',
    marginTop: 20,
    marginBottom:20,
    height: vh(45)
  },
  cube: {
    position: 'relative',
    left: '5%',
    width: '90%',
    height:'100%',
    fontSize: 18,
    textAlign: 'center',
  }, 
  traker: {
    position: 'absolute',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: '#00C3FF',
    height: '100vh',
    zIndex: 5,
    left: 0,
    bottom:0,
    width: '100%',
    overflow: 'hidden'
  },
  steps: {
    left: 0,
    zIndex: 9,
    top: 0,
    width: 70,
    height: 300
  },
  step: {
    flexDirection: 'row',
    paddingBottom: 15
  },
  stepText: {
    color :'#fff',
    paddingRight: 5,
    paddingLeft: 5
  },
  text: {
    color: '#fff'
  }
});