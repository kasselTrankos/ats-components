import 'react-native';
import React from 'react';
import {create, act} from 'react-test-renderer';
import {StepsIrrigation} from './../src';
describe('<StepsIrrigation>', () => {
  it('renders the correct text', () => {
    let root;
    act(()=> {root = create(<StepsIrrigation />);});
    expect(root.toJSON()).toMatchSnapshot();
  });
  it('validate given props', ()=> {
    const prop = [1, 4, 9];
    const text = '???';
    const ins = create(<StepsIrrigation steps={prop} text={text}/>);
    const steps = ins.root.findByType(StepsIrrigation);
    expect(steps.props.steps).toEqual(prop);
    expect(steps.props.text).toEqual(text);
  });
});