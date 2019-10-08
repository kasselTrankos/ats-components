import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text} from 'native-base';
const Props = {};
export class Pagination extends Component<Props> {
  render() {
    const {pages=[], page=1, onClick = ()=>{}} = this.props;
    return (
      <View style={styles.pagination}>
          {pages.map(item => 
            <Button
              key={'-'+ item + '-'}
              onPress = {() => onClick(current)}
              style={styles.button}
              info={page!==item} 
              small
              id={item+'-page'}>
              <Text style={styles.paginationText}>{item}</Text>
            </Button>
          )}
        </View>
    );
  }
}
const styles = StyleSheet.create({
  pagination: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    marginRight: 2,
    paddingLeft: 8,
    paddingRight: 8
  },
  paginationText: {
    fontFamily: "PT_Sans-Narrow-Web-Regular",
    fontSize: 22,
    color:'#fff',
    paddingLeft: 6,
    paddingRight: 6,
  }
});