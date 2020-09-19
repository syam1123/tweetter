import React, { Fragment } from 'react'
import loadable from '@loadable/component'
import styled from 'styled-components'

const TweetsList = loadable(() => import('../TweetsList'))
const animatedDog =
  'https://firebasestorage.googleapis.com/v0/b/tweeter-16f38.appspot.com/o/doggy-animated.webp?alt=media&token=60d06744-3a1c-4bb6-ab22-bace05fd8f54'

const LikedTweets = ({ likedTweets, toggleLike }) => {
  const tweets = Object.values(likedTweets) || []
  if (!tweets.length) {
    return (
      <EmptyContainer>
        <img src={animatedDog} alt="Doggy animated" />
        <Text>
          You haven't liked any tweets yet :( <br /> Go to feeds and you may
          find some interesting tweets
        </Text>
      </EmptyContainer>
    )
  }
  return (
    <Fragment>
      <TweetsList
        tweets={tweets}
        likedTweets={likedTweets}
        toggleLike={toggleLike}
      />
    </Fragment>
  )
}

LikedTweets.propTypes = {}

export default LikedTweets

const EmptyContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 75vh;
`

const Text = styled.p`
  text-align: center;
  color: #444;
  line-height: 1.5;
  font-size: 1.1rem;
`
