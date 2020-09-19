import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import { breakPoints } from '../../styles'

const RecentFeedsToggle = loadable(() => import('../RecentFeedsToggle'))
const TweetsList = loadable(() => import('../TweetsList'))

const AllTweets = ({
  isNewerFeedsAvailable,
  loadReacentTweets,
  visibleTweets,
  likedTweets,
  toggleLike,
}) => {
  return (
    <FeedsSection>
      <RecentFeedsToggle
        isVisible={isNewerFeedsAvailable}
        loadReacentTweets={loadReacentTweets}
      />
      <TweetsList
        tweets={visibleTweets}
        likedTweets={likedTweets}
        toggleLike={toggleLike}
      />
    </FeedsSection>
  )
}

AllTweets.propTypes = {
  isNewerFeedsAvailable: PropTypes.bool.isRequired,
  loadReacentTweets: PropTypes.func.isRequired,
  visibleTweets: PropTypes.array.isRequired,
  likedTweets: PropTypes.object.isRequired,
  toggleLike: PropTypes.func.isRequired,
}

export default AllTweets

const FeedsSection = styled.section`
  padding-left: 250px;
  margin-top: 4rem;

  @media ${breakPoints.tablet} {
    padding-left: 0px;
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
`
