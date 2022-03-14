import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from './App';

import React from 'react';
import { shallow } from 'enzyme';

describe('App Component', () => {
  let wrapper = null;
  beforeEach(() => (wrapper = shallow(<App />)));
  describe('Increment button', () => {
    it('should start with the value of 0', () => {
      const text = wrapper.find('p').text();
      expect(text).toEqual('Count: 0');
    });
    it('should increment by 1 when the button is clicked.', () => {
      const incrementButton = wrapper.find('button.increment');
      incrementButton.simulate('click');
      const text = wrapper.find('p').text();
      expect(text).toEqual('Count: 1');
    });
    it('should decrement by 1 when the button is clicked.', () => {
      const decrementButton = wrapper.find('button.decrement');
      decrementButton.simulate('click');
      const text = wrapper.find('p').text();
      expect(text).toEqual('Count: -1');
    });
    it('matches the snapshot ', () => {
      const tree = renderer.create(<App/>).toJSON()
      expect(tree).toMatchSnapshot()
    });
  });
});
