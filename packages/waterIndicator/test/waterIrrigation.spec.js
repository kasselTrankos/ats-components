import 'react-native';
import React from 'react';
<<<<<<< HEAD
import renderer from 'react-test-renderer';
import WaterIrrigation from './../src';
describe('<Testable>', () => {
  it('renders the correct text', () => {
    const value = 'greetings';
    const pair = 'salutations';
    console.log(WaterIrrigation);
    const inst = renderer.create(
      // <WaterIrrigation />
    );
=======
import {create, act} from 'react-test-renderer';
import {WaterIndicator} from './../src';
describe('<Testable>', () => {
  it('renders the correct text', () => {
    let root;
    act(()=> root = create(<WaterIndicator />));
    expect(root.toJSON()).toMatchSnapshot();
>>>>>>> wall
  });
});