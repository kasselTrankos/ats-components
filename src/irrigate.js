import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import {date as D, setHours, setMinutes} from './../lib/date';
import {compose} from './../lib/fp';





const Irrigate = props => {
  const {
    hour, day, minute
  } = props;
  const date = D.of(day).map(compose(setHours(hour), setMinutes(minute)));
  return <View style= {{
    width: '90%',
    backgroundColor:'#F8F8F8',
    justifyContent:'center',
    alignItems:'center',
    
    paddingTop:5,
    paddingBottom:5,
    borderWidth: 2,
 
    // Set border Hex Color Code Here.
    borderColor: '#FF5722',
    
   // Set border Radius.
    borderRadius: 20 ,
    marginTop: 8,
    //Its for IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,

    // its for android 
    elevation: 5,
    position:'relative',
  }}>
    <Text>El {date.toString('dddd dd-mmm-yyyy')} a las {date.toString('HH:MM')}</Text>
  </View>
}

export default Irrigate;