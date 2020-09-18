import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { Twitter, Favorite, FavoriteBorderOutlined } from '@material-ui/icons'

import { colors, breakPoints } from '../../styles'
console.log('styles', colors, breakPoints)
// const { colors, breakPoints } = styles

const Header = (props) => {
  const { likeCount } = props
  return (
    <Topbar>
      <Twitter style={{ fill: colors.white }} />
      <LikeCounter>
        {likeCount ? (
          <Favorite color="red" />
        ) : (
          <FavoriteBorderOutlined style={{ fill: colors.white }} />
        )}
        <p>{likeCount}</p>
      </LikeCounter>
    </Topbar>
  )
}

Header.propTypes = {
  likeCount: propTypes.number,
}

Header.defaultProps = {
  likeCount: 0,
}

export default Header

const Topbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2em 1em;
  background-color: ${colors.base};
  height: 60px;

  > svg {
    width: 3rem;
    height: 3rem;
  }

  @media ${breakPoints.tablet} {
    > svg {
      width: 2rem;
      height: 2rem;
    }
  }
`

const LikeCounter = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.2em 1em;
  border: 2px solid ${colors.white};
  border-radius: 1em;
  color: ${colors.white};

  p {
    margin: 0;
  }

  svg {
    height: 1.25rem;
    width: 1.25rem;
    margin-right: 0.5rem;
  }
`
