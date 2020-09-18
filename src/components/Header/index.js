import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Header = (props) => {
  const { likeCount } = props
  return <Topbar>Header comes here: {likeCount}</Topbar>
}

Header.propTypes = {
  likeCount: propTypes.number,
}

Header.defaultProps = {
  likeCount: 0,
}

export default Header

const Topbar = styled.header``
