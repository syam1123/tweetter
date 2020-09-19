import React from 'react'
import { shallow } from 'enzyme'
import FeedsLoader from '.'

describe('FeedsLoader', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<FeedsLoader />)
  })
  test('should render correctly', () => {
    expect(wrapper).toBeTruthy()
  })
})
