import React from 'react'
import { shallow } from 'enzyme'
import RecentFeedsToggle from '.'

describe('RecentFeedsToggle', () => {
  let wrapper
  const props = {
    isVisible: true,
    loadReacentTweets: jest.fn(),
  }
  beforeEach(() => {
    wrapper = shallow(<RecentFeedsToggle {...props} />)
  })
  test('should render correctly', () => {
    expect(wrapper).toBeTruthy()
  })

  test('Should load the newer tweets', () => {
    wrapper.find('#feedLoader').simulate('click')
    expect(props.loadReacentTweets).toBeCalled()
  })
})
