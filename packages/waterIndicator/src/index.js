import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { StepsIrrigation} from '@ats-components/steps-irrigation';
const Props = {};
export class WaterIndicator extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      volumen = 100,
      steps = ['3', '2.5', '2', '1.5', '1', '0.5', '0'],
      fontColor = '#FFF', 
      fontSize= 18,
      bgColor = '#00C3FF',
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ ...StyleSheet.flatten(styles.cube), fontColor, fontSize }}>
          <View style={{ ...StyleSheet.flatten(styles.traker), bgColor, height: `${volumen}%`}} />
          <StepsIrrigation 
            style={styles.steps} 
            steps={steps}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position:'relative',
    flex: 1,
    width: '100%',
    marginTop: 0,
    marginBottom:0,
    height: '100%',
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
    height: '100%',
    zIndex: 5,
    left: 0,
    bottom:0,
    width: '100%',
    overflow: 'hidden'
  },
  steps: {
    left: 0,
    zIndex: 9,
    top: '5%',
    width: '70%',
    height: '90%',
  },
  step: {
    flexDirection: 'row',
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