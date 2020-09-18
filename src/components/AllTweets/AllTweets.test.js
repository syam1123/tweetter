import React from 'react'
import { shallow } from 'enzyme'
import AllTweets from '.'

describe('AllTweets', () => {
  let wrapper
  const props = {
    isNewerFeedsAvailable: false,
    loadReacentTweets: jest.fn(),
    visibleTweets: [],
    likedTweets: {},
    toggleLike: jest.fn(),
  }
  beforeEach(() => {
    wrapper = shallow(<AllTweets {...props} />)
  })
  test('should render correctly', () => {
    expect(wrapper).toBeTruthy()
  })
})
