import React from 'react';
import renderer from 'react-test-renderer';

import Items from './Items';

describe('snap shot test', () => {
  it('renders correctly when there are no items', () => {
    const tree = renderer.create(<Items />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});