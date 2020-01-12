import 'react-native';
import React from 'react';
import {create, act} from 'react-test-renderer';
import {downCounter} from './../src';
describe('<downCounter>', () => {
  it('renders the correct text', () => {
    let root;
    act(()=> {root = create(<downCounter />);});
    expect(root.toJSON()).toMatchSnapshot();
  });
  it('render shallow read', ()=> {
    const prop = 20;
    const ins = create(<downCounter value={prop}/>);
    const steps = ins.root.findByType(StepsIrrigation);
    expect(steps.props.steps).toEqual(prop);
  });
});