// @flow

import React, { Component } from "react";
import { View } from 'react-native';
import FCalendar from "./src/Calendar.js";
import CalendarDay from "./src/CalendarDay.js";


const App = props => <View style={{top: 40, flex: 1}}>
    <FCalendar/>
  </View>

export default App;

// type State = {
//   days: []
// };

// export default class App extends Component<Props, State> {
//   state = {
//     days: []
//   };

//   componentWillMount() {
//     for (let i = 1; i <= 357; i++) {
//       this.state.days.push({ id: i, number: i, active: Math.random() >= 0.9 });
//     }
//   }

//   onSingleCellSelection = (dayIndex: number) => {
//     const days = this.state.days;
//     days[dayIndex].active = !days[dayIndex].active;
//     this.setState({
//       days
//     });
//   };

//   onMultiSelectionEnd = (selectionMode: string, selection: Array<number>) => {
//     const days = this.state.days;
//     for (const index in selection) {
//       days[selection[index]].active = selectionMode === "select";
//     }
//     this.setState({ days });
//   };

//   renderCell = (day: {}) => <CalendarDay {...day} />;

//   render() {
//     return (
//       <Calendar
//         days={this.state.days}
//         renderCell={this.renderCell}
//         onSingleCellSelection={this.onSingleCellSelection}
//         onMultiSelectionEnd={this.onMultiSelectionEnd}
//       />
//     );
//   }
// }