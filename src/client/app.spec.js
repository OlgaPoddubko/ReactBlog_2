import React from 'react';
import App from './app';

describe('render App', () => {
  it('should render App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
