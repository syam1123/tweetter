// rxjs is expoxed by
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.min.js
import { interval, merge, BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'

const createTweetSource = (frequency, account, attribute, accountId) => {
  return interval(frequency).pipe(
    map((i) => ({
      account,
      timestamp: Date.now(),
      content: `${attribute} Tweet number ${i + 1}`,
      id: `${accountId}-${Date.now()}`,
    }))
  )
}

const tweets = merge(
  createTweetSource(5000, 'AwardsDarwin', 'Facepalm', '1234'),
  createTweetSource(3000, 'iamdevloper', 'Expert', '2345'),
  createTweetSource(5000, 'CommitStrip', 'Funny', '3456')
)

const initState = {
  tweets: [],
  visibleTweets: [],
  likedTweets: [],
}

export const visibleTweetProvider = new BehaviorSubject([])
export const allTweetProvider = new BehaviorSubject([])

/**
 * Returns an array of tweets that are not older than the secified timestamp
 * @param {array} tweets array of tweets from which we need to extract the recent ones
 * @param {number} time time in milliseconds
 */
const getRecentTweets = (tweets, time = 30000) => {
  const recentTweets = []
  const currentTime = new Date().getTime()
  let hasfinished = false
  while (!hasfinished) {
    // It is best to take the tweet from the end to reduce the complexity
    // worst case time complexity O(n)
    // Also, it makes the tweets in the recentTweets in the order of latest tweet first
    const lastTweet = tweets.pop()
    if (!lastTweet || !lastTweet.timestamp) {
      hasfinished = true
    } else if (currentTime - lastTweet.timestamp <= time) {
      recentTweets.push(lastTweet)
    } else {
      hasfinished = true
    }
  }
  // the tweets in the original array needed to be in the order of arrival of tweets
  initState.tweets = [...recentTweets].reverse()
  return recentTweets
}

/**
 * Initiate the tweet subscription
 * The newer tweets are being added to the top of the initState.tweets stack
 * If the total tweets are less than 10, keep adding the newer tweets to the visibleTweets so that,
 * the user won't be seeing the half empty screen initially
 */
export const initSubscription = () => {
  tweets.subscribe((tweet) => {
    initState.tweets.push(tweet)
    if (initState.tweets.length < 5) {
      // add to the beginning of the array
      initState.visibleTweets.unshift(tweet)
      visibleTweetProvider.next(initState.visibleTweets)
    }
    allTweetProvider.next(initState.tweets)
  })
}

/**
 * Refreshing the tweets and visibleTweets array on user request
 * After the visibleTweets are updated, notify the component with BehaviorSubject
 */
export const refreshTweets = () => {
  // We only shows the tweets for the last 30 seconds
  initState.visibleTweets = getRecentTweets(initState.tweets, 30000)
  visibleTweetProvider.next(initState.visibleTweets)
}

export const resetAllSubscription = () => {
  tweets.unsubscribe()
}
