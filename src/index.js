import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity,
  PanResponder, Dimensions } from 'react-native';
import { Content, Button } from 'native-base';


const Props = {};
export class barCalendar extends Component<Props> {

  render() {

    return (
      <Content contentContainerStyle={styles.view}>
          <View style={styles.header}>
            <Text style={styles.monthName}>MES</Text>
          </View>  
      </Content>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
  },
  header: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthName: {
    width: '70%',
    fontFamily: "ostrich-regular",
    fontSize: 22,
    textAlign: 'center',
    paddingLeft: 15,
    marginBottom: 10
  },
  weekDays: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dot: {
    width: 6,
    height: 6,
    top: -10,
    left: 14,
    marginTop: 1,
    marginLeft: 1,
    marginRight: 1,
    borderRadius: 4,
  },
  weekDay: {
    color: '#003087',
    fontFamily: "ostrich-regular",
    fontSize: 18,
    paddingLeft: 7,
    paddingTop: 4,
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    backgroundColor: '#05DBF2',
  }
});