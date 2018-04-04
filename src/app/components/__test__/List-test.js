import React from 'react'
import { mount, shallow } from 'enzyme';
import List from '../List';
describe('List Component', () => {

  const component = mount(<List/>);
  console.log(component);
  // it('renders h1', () => {
  //   expect(wrapper.find('h1').text()).toEqual('Hello World')
  // })
  // it('renders p', () => {
  //   expect(wrapper.find('p').text()).toEqual('Welcome to my world')
  // })
})