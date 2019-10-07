import 'react-native';
import React from 'react';
import {create, act} from 'react-test-renderer';
import {WaterIndicator} from './../src';
import {StepsIrrigation} from './../src/steps';
describe('<WaterIndicator>', () => {
  it('renders the correct text', () => {
    let root;
    act(()=> {root = create(<WaterIndicator />);});
    expect(root.toJSON()).toMatchSnapshot();
  });
  it('render shallow read', ()=> {
    const prop = [1, 4, 9];
    const ins = create(<WaterIndicator steps={prop}/>);
    const steps = ins.root.findByType(StepsIrrigation);
    console.log(steps.props.steps);
    expect(steps.props.steps).toEqual(prop);
  });
});