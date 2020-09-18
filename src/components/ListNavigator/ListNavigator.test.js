import React from 'react'
import { shallow } from 'enzyme'
import ListNavigator from '.'

describe('ListNavigator', () => {
  let wrapper
  const props = {
    toggleTab: jest.fn(),
    activeTab: 'all',
  }
  beforeEach(() => {
    wrapper = shallow(<ListNavigator {...props} />)
  })
  test('should render correctly', () => {
    expect(wrapper).toBeTruthy()
  })
})
