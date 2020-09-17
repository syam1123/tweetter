import React, { Component } from 'react'
import './App.css'

import {
  initSubscription,
  visibleTweetProvider,
  refreshTweets,
  allTweetProvider,
  resetAllSubscription,
} from './store'

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
        console.log('visible tweets updated', visibleTweets)
        this.setState({ visibleTweets })
      },
    })

    allTweetProvider.subscribe({
      next: (allTweets = []) => {
        if (allTweets.length > this.state.visibleTweets.length + 5) {
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
