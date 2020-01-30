import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Irrigate from './src/irrigate';

const test =[
  {"date":"2019-10-10 23:00","day":"2020-01-24","uuid":"96ddf180-eaa2-11e9-8f6a-c14573fa7201","duration":63,"hour":"23","minute":"10"},
{"date":"2019-10-11 09:00","day":"2020-10-11","uuid":"96d4d100-e4d4-11e9-a2b9-0d61e5afca6a","duration":63,"hour":"09","minute":"30"},
{"date":"2019-10-13 09:00","day":"2019-10-13","uuid":"bed1c910-e4d4-11e9-9d82-91befd3c4656","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-21 09:00","day":"2019-10-21","uuid":"debee350-e751-11e9-9731-af8d8f83200b","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-21 09:00","day":"2019-10-21","uuid":"debee350-e751-11e9-9731-af8d8f83200b","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-21 09:00","day":"2019-10-21","uuid":"debee350-e751-11e9-9731-af8d8f83200b","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-21 09:00","day":"2019-10-21","uuid":"debee350-e751-11e9-9731-af8d8f83200b","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-21 09:00","day":"2019-10-21","uuid":"debee350-e751-11e9-9731-af8d8f83200b","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-21 09:00","day":"2019-10-21","uuid":"debee350-e751-11e9-9731-af8d8f83200b","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-21 09:00","day":"2019-10-21","uuid":"debee350-e751-11e9-9731-af8d8f83200b","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-21 09:00","day":"2019-10-21","uuid":"debee350-e751-11e9-9731-af8d8f83200b","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-21 09:00","day":"2019-10-21","uuid":"debee350-e751-11e9-9731-af8d8f83200b","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-21 09:00","day":"2019-10-21","uuid":"debee350-e751-11e9-9731-af8d8f83200b","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-21 09:00","day":"2019-10-21","uuid":"debee350-e751-11e9-9731-af8d8f83200b","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-22 09:00","day":"2019-10-22","uuid":"ebd060a0-e751-11e9-9731-af8d8f83200b","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-24 09:00","day":"2019-10-24","uuid":"f2263bf0-e751-11e9-8c8f-cbd2168cec6f","duration":63,"hour":"09","minute":"00"},
{"date":"2019-10-26 09:00","day":"2019-10-26","uuid":"f6f5ec70-e751-11e9-8c8f-cbd2168cec6f","duration":63,"hour":"09","minute":"00"},
];

export default function App(props) {
  const {
    irrigations = test 
  } = props;
  return (
    <ScrollView style={{backgroundColor: 'lime', height: 500}}>
    <View style={styles.container}>
      {irrigations.map((args, key) => <Irrigate key={key} {...args} />)}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
