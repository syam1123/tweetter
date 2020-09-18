import React from 'react'
import { shallow } from 'enzyme'
import RecentFeedsToggle from '.'

describe('RecentFeedsToggle', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<RecentFeedsToggle />)
  })
  test('should render correctly', () => {
    expect(wrapper).toBeTruthy()
  })
})
