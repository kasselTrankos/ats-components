import 'react-native';
import React from 'react';
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
  });
});