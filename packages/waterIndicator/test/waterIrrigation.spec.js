import React from 'react';
import 'react-native';
import renderer from 'npm ';
import { WaterIndicator } from '../src/';

describe('<Testable>', () => {
  it('renders the correct text', () => {
    const value = 'greetings';
    const pair = 'salutations';
    const inst = renderer.create(
      <WaterIndicator />
    );
  });
});