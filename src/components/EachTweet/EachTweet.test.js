import React from 'react'
import { shallow } from 'enzyme'
import EachTweet from '.'

describe('EachTweet', () => {
  let wrapper
  const props = {
    tweet: {
      content: 'Test content',
      account: 'Test account',
      timestamp: 12141413413,
    },
    toggleLike: jest.fn(),
    isLiked: false,
  }
  beforeEach(() => {
    wrapper = shallow(<EachTweet {...props} />)
  })
  test('should render correctly', () => {
    expect(wrapper).toBeTruthy()
  })

  test('User can like/unlike a tweet', () => {
    const render = wrapper.dive()
    render.find('#likeButton').simulate('click')
    expect(props.toggleLike).toBeCalled()
  })
})
