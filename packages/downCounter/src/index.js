import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
const Props = {};
export class downCounter extends Component<Props> {
  state = { counter: 0};  
  constructor(props) {
    super(props);
  }
  _getCounter () {
    return (<Text  style={{ ...StyleSheet.flatten(styles.text) }}>
      {this.state.counter}
    </Text>);
  }
  render() {
    const {
      value = 15
    } = this.props;

    return (
      <View style={{ ...StyleSheet.flatten(styles.container) }}>
        {this._getCounter()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position:'relative',
  },
  text: {
    fontSize: 20,
    color: '#fff'
  },
});