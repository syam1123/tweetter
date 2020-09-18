import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import {
  initSubscription,
  visibleTweetProvider,
  refreshTweets,
  allTweetProvider,
  resetAllSubscription,
} from './data-centre'
import Header from './components/Header'
import RecentFeedsToggle from './components/RecentFeedsToggle'
import TweetsList from './components/TweetsList'
import ListNavigator from './components/ListNavigator'
import GlobalStyles from './styles/GlobalStyles'

class App extends Component {
  constructor() {
    super()
    this.state = {
      visibleTweets: [],
      isNewerFeedsAvailable: false,
      likedTweets: {},
    }
  }
  componentDidMount() {
    initSubscription()
    visibleTweetProvider.subscribe({
      next: (visibleTweets) => {
        this.setState({ visibleTweets })
      },
    })

    allTweetProvider.subscribe({
      next: (allTweets = []) => {
        const { visibleTweets, isNewerFeedsAvailable } = this.state
        if (allTweets.length > visibleTweets.length + 3) {
          // If three more new tweets are available then the visibleTweets are dirty
          if (!isNewerFeedsAvailable)
            this.setState({ isNewerFeedsAvailable: true })
        }
      },
    })
  }

  componentWillUnmount() {
    visibleTweetProvider.unsubscribe()
    allTweetProvider.unsubscribe()
    resetAllSubscription()
  }

  loadReacentTweets = () => {
    this.setState({ isNewerFeedsAvailable: false })
    refreshTweets()
  }

  toggleLike = (tweet) => {
    if (!tweet) return
    const { likedTweets } = this.state
    if (likedTweets[tweet.id]) {
      delete likedTweets[tweet.id]
    } else {
      likedTweets[tweet.id] = tweet
    }
    this.setState({ likedTweets })
  }

  render() {
    const { visibleTweets, isNewerFeedsAvailable, likedTweets } = this.state
    return (
      <Fragment>
        <GlobalStyles />
        <Header />
        <FeedsSection>
          <RecentFeedsToggle isVisible={isNewerFeedsAvailable} />
          <TweetsList
            tweets={visibleTweets}
            likedTweets={likedTweets}
            toggleLike={this.toggleLike}
          />
          <ListNavigator />
        </FeedsSection>
      </Fragment>
    )
  }
}

export default App

const FeedsSection = styled.section``
