import React, { Component, Fragment } from 'react'
import loadable from '@loadable/component'
import styled from 'styled-components'
import { breakPoints } from './styles'

import {
  initSubscription,
  visibleTweetProvider,
  refreshTweets,
  allTweetProvider,
  resetAllSubscription,
  clearTweets,
} from './data-centre'
import { tabs } from './helpers'
const Header = loadable(() => import('./components/Header'))
const ListNavigator = loadable(() => import('./components/ListNavigator'))
const AllTweets = loadable(() => import('./components/AllTweets'))
const LikedTweets = loadable(() => import('./components/LikedTweets'))
const ClearTweets = loadable(() => import('./components/ClearTweets'))

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

  clearAll = () => {
    this.setState({
      visibleTweets: [],
      isNewerFeedsAvailable: false,
      likedTweets: {},
    })
    clearTweets()
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
      case 'liked':
        return (
          <LikedTweets likedTweets={likedTweets} toggleLike={this.toggleLike} />
        )
      case 'clear':
        return <ClearTweets clearAll={this.clearAll} />

      default:
      // code block
    }
  }

  render() {
    const { activeTab, likedTweets } = this.state
    const likeCount = Object.keys(likedTweets).length
    return (
      <Fragment>
        <Header likeCount={likeCount} />
        <FeedsSection>{this.renderTabContent()}</FeedsSection>
        <ListNavigator activeTab={activeTab} toggleTab={this.toggleTab} />
      </Fragment>
    )
  }
}

export default App

export const FeedsSection = styled.section`
  padding-left: 250px;
  margin-top: 4rem;

  @media ${breakPoints.tablet} {
    padding-left: 0px;
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
`
