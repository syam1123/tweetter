import PropTypes from 'prop-types'
import React from 'react'
import loadable from '@loadable/component'
import styled from 'styled-components'

import { getIsLiked } from '../../helpers'
import FeedsLoader from '../FeedsLoader'

const EachTweet = loadable(() => import('../EachTweet'))

const TweetsList = ({ tweets, likedTweets, toggleLike }) => {
  if (!tweets.length) {
    return <FeedsLoader />
  }
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
