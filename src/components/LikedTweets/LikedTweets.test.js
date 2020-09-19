import React from 'react'
import { shallow } from 'enzyme'
import LikedTweets from '.'

describe('LikedTweets', () => {
  let wrapper
  const props = {
    likedTweets: {},
    toggleLike: jest.fn(),
  }
  beforeEach(() => {
    wrapper = shallow(<LikedTweets {...props} />)
  })
  test('should render correctly', () => {
    expect(wrapper).toBeTruthy()
  })
})
