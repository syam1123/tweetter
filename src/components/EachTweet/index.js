import React from 'react'
import styled, { css } from 'styled-components'
import moment from 'moment'
import { pure } from 'recompose'
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons'
import PropTypes from 'prop-types'

import { colors } from '../../styles'
import { getUserIconColor } from '../../helpers'

const EachTweet = ({ tweet, isLiked, toggleLike }) => {
  if (!tweet) {
    return 'null'
  }
  const userIconText = tweet.content.charAt(0)

  return (
    <Tweet isLiked={isLiked}>
      <TweetHead>
        <UserIcon color={getUserIconColor()}>{userIconText}</UserIcon>
        <div>
          <UserName>{tweet.account}</UserName>
          <Time>{moment(tweet.timestamp).format('hh:mm:ss a')}</Time>
        </div>
      </TweetHead>
      <TweetContent>{tweet.content}</TweetContent>
      <TweetActions>
        <LikeButton
          onClick={() => {
            toggleLike(tweet)
          }}
          tabIndex="0"
          isLiked={isLiked}
        >
          {isLiked ? <Favorite /> : <FavoriteBorderOutlined />}
        </LikeButton>
      </TweetActions>
    </Tweet>
  )
}

EachTweet.propTypes = {
  tweet: PropTypes.object.isRequired,
  isLiked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
}

export default pure(EachTweet)

const Tweet = styled.li`
  border: 1px solid ${colors.border};
  border-radius: 0.5rem;
  margin: 1em 0em;
  ${(props) =>
    props.isLiked &&
    css`
      box-shadow: ${colors.boxShadow};
    `}
`

const TweetHead = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
  background-color: ${colors.lightBlue};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`

const UserIcon = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: ${(props) => (props.color ? props.color : colors[0])};
  margin-right: 1rem;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
`

const UserName = styled.h2`
  margin: 0 0 0.2rem 0;
`

const TweetContent = styled.p`
  padding: 1rem;
  font-size: 2rem;
  margin: 0rem;
  font-weight: 300;
  border-bottom: 1px solid ${colors.border};
`

const TweetActions = styled.div`
  padding: 1em;
`

const Time = styled.span`
  font-size: 0.875rem;
  color: ${colors.gray};
`

const LikeButton = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  outline: none;

  svg {
    width: 1.5em;
    height: 1.5em;
    fill: ${colors.lightGray};
  }

  ${(props) =>
    props.isLiked &&
    css`
      svg {
        fill: ${colors.darkRed};
      }
    `}

  &:focus {
    svg {
      fill: ${colors.red};
    }
  }

  &:hover {
    transform: scale(1.1);
    transition: all ease-in 0.2s;
  }
`
