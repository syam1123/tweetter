import React, { Component, Fragment } from 'react'

import {
  initSubscription,
  visibleTweetProvider,
  refreshTweets,
  allTweetProvider,
  resetAllSubscription,
} from './data-centre'
import Header from './components/Header'
import ListNavigator from './components/ListNavigator'
import GlobalStyles from './styles/GlobalStyles'
import { tabs } from './helpers'
import AllTweets from './components/AllTweets'

class App extends Component {
  constructor() {
    super()
    this.state = {
      visibleTweets: [],
      isNewerFeedsAvailable: false,
      likedTweets: {},
      activeTab: Object.keys(tabs)[0],
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
    window.scrollTo(0, 0)
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

  toggleTab = (tab) => {
    this.setState({ activeTab: tab })
  }

  renderTabContent = () => {
    const {
      visibleTweets,
      isNewerFeedsAvailable,
      likedTweets,
      activeTab,
    } = this.state
    switch (activeTab) {
      case 'all':
        return (
          <AllTweets
            visibleTweets={visibleTweets}
            isNewerFeedsAvailable={isNewerFeedsAvailable}
            likedTweets={likedTweets}
            loadReacentTweets={this.loadReacentTweets}
            toggleLike={this.toggleLike}
          />
        )

      default:
      // code block
    }
  }

  render() {
    const { activeTab, likedTweets } = this.state
    const likeCount = Object.keys(likedTweets).length
    return (
      <Fragment>
        <GlobalStyles />
        <Header likeCount={likeCount} />
        {this.renderTabContent()}
        <ListNavigator activeTab={activeTab} toggleTab={this.toggleTab} />
      </Fragment>
    )
  }
}

export default App
