import React from 'react'
import { shallow } from 'enzyme'
import ListNavigator from '.'

describe('ListNavigator', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ListNavigator />)
  })
  test('should render correctly', () => {
    expect(wrapper).toBeTruthy()
  })
})
