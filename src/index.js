import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';


const Props = {};
export class kalendar extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('noi hahysd');
    return (
      <View>
        <Text style={styles.monthName}>HOLA</Text>
      </View>
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