// rxjs is expoxed by
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js
import { interval, merge, BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'

const createTweetSource = (frequency, account, attribute) => {
  return interval(frequency).pipe(
    map((i) => ({
      account,
      timestamp: Date.now(),
      content: `${attribute} Tweet number ${i + 1}`,
    }))
  )
}

const tweets = merge(
  createTweetSource(5000, 'AwardsDarwin', 'Facepalm'),
  createTweetSource(3000, 'iamdevloper', 'Expert'),
  createTweetSource(5000, 'CommitStrip', 'Funny')
)

export const visibleTweetProvider = new BehaviorSubject([])
export const allTweetProvider = new BehaviorSubject([])

const initState = {
  tweets: [],
  visibleTweets: [],
  likedTweets: [],
}

const getRecentTweets = (tweets, time = 30000) => {
  const recentTweets = []
  const currentTime = new Date().getTime()
  while (true) {
    const lastTweet = tweets.pop()
    if (!lastTweet || !lastTweet.timestamp) {
      initState.tweets = recentTweets
      return recentTweets
    }
    if (currentTime - lastTweet.timestamp < time) {
      recentTweets.push(lastTweet)
    } else {
      initState.tweets = recentTweets
      return recentTweets
    }
  }
}

export const initSubscription = () => {
  tweets.subscribe((tweet) => {
    initState.tweets.push(tweet)
    if (initState.tweets.length < 10) {
      // add to the beginning of the array
      initState.visibleTweets.unshift(tweet)
      visibleTweetProvider.next(initState.visibleTweets)
    }
    allTweetProvider.next(initState.tweets)
  })
}

export const refreshTweets = () => {
  // We only shows the tweets for the last 30 seconds
  const allTweetsAtThisTime = [...initState.tweets]
  console.log('allTweetsAtThisTime', allTweetsAtThisTime)
  initState.visibleTweets = getRecentTweets(allTweetsAtThisTime, 30000)
  console.log('initState.visibleTweets', initState.visibleTweets)
  visibleTweetProvider.next(initState.visibleTweets)
  allTweetProvider.next(initState.tweets)
}

export const resetAllSubscription = () => {
  tweets.unsubscribe()
}
