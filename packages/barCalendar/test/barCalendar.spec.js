import 'react-native';
import React from 'react';
import {create, act} from 'react-test-renderer';
import {barCalendar} from './../src';
describe('<barCalendar>', () => {
  it('renders', () => {
    console.log(barCalendar)
    let root;
    act(()=> {root = create(<barCalendar />);});
    console.log(root.toJSON());
    expect(root.toJSON()).toMatchSnapshot();
  });

//   it('validate given props', ()=> {
//     const prop = [1, 4, 9];
//     const text = '???';
//     const ins = create(<barCalendar steps={prop} text={text}/>);
//     const steps = ins.root.findByType(barCalendar);
//     expect(steps.props.steps).toEqual(prop);
//     expect(steps.props.text).toEqual(text);
//   });
});