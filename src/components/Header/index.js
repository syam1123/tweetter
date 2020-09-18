import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { Twitter, Favorite, FavoriteBorderOutlined } from '@material-ui/icons'

import { colors, breakPoints } from '../../styles'

const Header = (props) => {
  const { likeCount } = props
  return (
    <Topbar>
      <Twitter style={{ fill: colors.white }} />
      <LikeCounter>
        {likeCount ? <Favorite /> : <FavoriteBorderOutlined />}
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
  background-color: transparent;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100vw;

  > svg {
    width: 3rem;
    height: 3rem;
    z-index: 10;
  }

  @media ${breakPoints.tablet} {
    background-color: ${colors.base};
    position: relative;

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
  border: 2px solid ${colors.base};
  border-radius: 1em;
  color: ${colors.base};

  p {
    margin: 0;
  }

  svg {
    height: 1.25rem;
    width: 1.25rem;
    margin-right: 0.5rem;
    fill: ${colors.base};
  }

  @media ${breakPoints.tablet} {
    border: 2px solid ${colors.white};
    color: ${colors.white};

    svg {
      fill: ${colors.white};
    }
  }
`
