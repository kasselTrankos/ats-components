import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Content } from 'native-base';

const Props = {};
export class StepsIrrigation extends Component<Props> {
constructor(props) {
  super(props);
}

render() {
  const { 
    steps = [],
    style = {},
    color = '#fff',
    fontSize = 18,
    text = '---' } = this.props;
  return (
    <View style={style}>
      {steps.map((step) =>
        <Content contentContainerStyle={styles.step} 
          key={`${text}-${step}_iriirg`}>
          <Text style={{ ...StyleSheet.flatten(styles.stepText), ...StyleSheet.flatten(styles.text), color, fontSize: parseInt(fontSize) }}>{text}</Text>
          <Text style={{ ...StyleSheet.flatten(styles.text), color, fontSize: parseInt(fontSize)}}>{step}</Text>
        </Content>
      )}
    </View>);
  }
}
const styles = StyleSheet.create({
  step: {
    flexDirection: 'row',
    paddingBottom: 15
  },
  stepText: {
    paddingRight: 5,
    paddingLeft: 5
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
});
