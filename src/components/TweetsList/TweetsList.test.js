import React from 'react'
import { shallow } from 'enzyme'
import TweetsList from '.'

describe('TweetsList', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<TweetsList />)
  })
  test('should render correctly', () => {
    expect(wrapper).toBeTruthy()
  })
})
