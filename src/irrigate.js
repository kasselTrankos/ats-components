import React, {useState} from 'react';
import { Text, View } from 'react-native';
import {date as D, setHours, setMinutes} from './../lib/date';
import {compose} from './../lib/fp';
import SwipePicker from 'react-native-swipe-picker'






const Irrigate = props => {
  const {
    hour, day, minute
  } = props;
  const [selected, setSelected] = useState();
  const [itemList] = useState([1,2,4,45,5,56,6,6,6]);
  const onPickerSelect = (e) => console.log(e);
  const date = D.of(day).map(compose(setHours(hour), setMinutes(minute)));
  return <View style= {{
    width: '90%',
    backgroundColor:'#E0F0EA',
    // justifyContent:'center',
    alignItems:'center',
    paddingLeft: 20,
    paddingRight: 20,
    minHeight: 90,
    paddingTop:5,
    paddingBottom:5,
    borderWidth: 2,
 
    // Set border Hex Color Code Here.
    borderColor: '#95ADBE',
    
   // Set border Radius.
    borderRadius: 20 ,
    marginBottom: 10,
    //Its for IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // its for android 
    elevation: 5,
    position:'relative',
  }}>
    <Text>El {date.toString('dddd dd-mmm-yyyy')} a las {date.toString('HH:MM')}</Text>
    <SwipePicker
        items={[
          {
            value: 101,
            label: 'Item 101'
          },
          {
            value: 202,
            label: 'Item 202'
          },
          {
            value: 303,
            label: 'Item 303'
          },
          {
            value: 404,
            label: 'Item 404'
          },
          {
            value: 505,
            label: 'Item 505'
          }
        ]}
        onChange={ ({ index, item }) => {
          console.log( `Selected index: ${ index }` );
          console.log( `Selected item: ${ item }` );
        }}
        height={ 80 }
        width={ 120 }
       />
  </View>
}

export default Irrigate;