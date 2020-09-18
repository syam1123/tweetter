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
        const { visibleTweets } = this.state
        if (allTweets.length > visibleTweets.length + 3) {
          // If three more new tweets are available then the visibleTweets are dirty
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
  render() {
    const { visibleTweets, isNewerFeedsAvailable } = this.state
    return (
      <Fragment>
        <GlobalStyles />
        <Header />
        {isNewerFeedsAvailable && (
          <button onClick={this.loadReacentTweets}>Load more tweets</button>
        )}
        {visibleTweets.map((tweet, index) => {
          return <p key={`${tweet.timestamp}-${index}`}>{tweet.content}</p>
        })}
        <FeedsSection>
          <RecentFeedsToggle isVisible={isNewerFeedsAvailable} />
          <TweetsList tweets={visibleTweets} />
          <ListNavigator />
        </FeedsSection>
      </Fragment>
    )
  }
}

export default App

const FeedsSection = styled.section``
