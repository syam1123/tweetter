import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'

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
    <Fragment>
      <RecentFeedsToggle
        isVisible={isNewerFeedsAvailable}
        loadReacentTweets={loadReacentTweets}
      />
      <TweetsList
        tweets={visibleTweets}
        likedTweets={likedTweets}
        toggleLike={toggleLike}
      />
    </Fragment>
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
