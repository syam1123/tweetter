import React from 'react'
import { shallow } from 'enzyme'
import ClearTweets from '.'

describe('ClearTweets', () => {
  let wrapper
  const props = {
    clearAll: jest.fn(),
  }
  beforeEach(() => {
    wrapper = shallow(<ClearTweets {...props} />)
  })
  test('should render correctly', () => {
    expect(wrapper).toBeTruthy()
  })

  test('Should call clearAll function', () => {
    const render = wrapper.dive()
    render.find('#clearButton').simulate('click')
    expect(props.clearAll).toBeCalled()
  })
})
