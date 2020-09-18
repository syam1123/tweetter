import React from 'react'
import { shallow } from 'enzyme'
import TweetsList from '.'

describe('TweetsList', () => {
  let wrapper
  const props = {
    tweets: [
      {
        content: 'Test content',
        account: 'Test account',
        timestamp: 12141413413,
        id: '12345',
      },
    ],
    likedTweets: {
      12345: {
        content: 'Test content',
        account: 'Test account',
        timestamp: 12141413413,
        id: '12345',
      },
    },
  }
  beforeEach(() => {
    wrapper = shallow(<TweetsList {...props} />)
  })
  test('should render correctly', () => {
    expect(wrapper).toBeTruthy()
  })
})
