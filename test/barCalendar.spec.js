import 'react-native';
import React from 'react';
import {create, act} from 'react-test-renderer';
import {kalendar} from './../src';
describe('<kalendar>', () => {
  it('renders', () => {
    console.log(kalendar)
    let root;
    act(()=> {root = create(<kalendar >hola</kalendar>);});
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