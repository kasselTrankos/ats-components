import 'react-native';
import React from 'react';
import {create, act} from 'react-test-renderer';
import {Pagination} from './../src';
describe('<Pagination>', () => {
  it('renders the correct text', () => {
    let root;
    act(()=> {root = create(<Pagination pages={[1,2,35, 55]}/>);});
    expect(root.toJSON()).toMatchSnapshot();
  });

//   it('validate given props', ()=> {
//     const prop = [1, 4, 9];
//     const text = '???';
//     const ins = create(<Pagination steps={prop} text={text}/>);
//     const steps = ins.root.findByType(Pagination);
//     expect(steps.props.steps).toEqual(prop);
//     expect(steps.props.text).toEqual(text);
//   });
});