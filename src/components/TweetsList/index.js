import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { getIsLiked } from '../../helpers'

import EachTweet from '../EachTweet'

const TweetsList = ({ tweets, likedTweets, toggleLike }) => {
  return (
    <TweetContainer>
      <List>
        {tweets.map((tweet, index) => {
          return (
            <EachTweet
              key={`${tweet.timestamp}-${index}`}
              tweet={tweet}
              isLiked={getIsLiked(tweet.id, likedTweets)}
              toggleLike={toggleLike}
            />
          )
        })}
      </List>
    </TweetContainer>
  )
}

TweetsList.prototype = {
  tweets: PropTypes.array.isRequired,
  likedTweets: PropTypes.object.isRequired,
  toggleLike: PropTypes.func.isRequired,
}

export default TweetsList

const TweetContainer = styled.section`
  width: 90%;
  max-width: 900px;
  margin: auto;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`
