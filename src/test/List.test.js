import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import List from '../src/app/components/List'

const wrapper = shallow(<List />);

describe('(Component) App', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
});