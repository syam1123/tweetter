import React, { Component } from 'react'

import {
  initSubscription,
  visibleTweetProvider,
  refreshTweets,
  allTweetProvider,
  resetAllSubscription,
} from './data-centre'

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
      <div className="App">
        <header className="App-header">
          {isNewerFeedsAvailable && (
            <button onClick={this.loadReacentTweets}>Load more tweets</button>
          )}
          {visibleTweets.map((tweet, index) => {
            return <p key={`${tweet.timestamp}-${index}`}>{tweet.content}</p>
          })}
        </header>
      </div>
    )
  }
}

export default App
