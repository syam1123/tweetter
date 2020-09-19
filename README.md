# Tweeter

This is a sample project to create a twitter like website which reads the tweets from an rxjs observable and displays to the user:

## Main Features

- User can Like/Unlike a tweet
- All tweets and liked tweets can be toggled in the UI
- A like counter is displayed on top of the page
- User can clear all the tweets (including liked)
- User will see the toggle to load newer tweets in the all feed section
- Only feeds not older than 30 seconds will be shown to the user
- Liked tweets will be shown regardless of how old they are

## Additional features

- Mobile first development, fully responsive
- Fully accessible via keyboard and screen readers
- PWA - User can install the website as an app in mobile/desktop

## Lighthouse score:

![image](https://firebasestorage.googleapis.com/v0/b/tweeter-16f38.appspot.com/o/lighthouse-report.png?alt=media&token=1e4f96c6-a3e4-40f2-a75a-5153886ed529)

## Live Demo

Live demo is available here: [Demo](https://tweeter-16f38.firebaseapp.com/)

## Local Development

The project is created using build upon `React` using `create-react-app` and `rx.js`

### Steps run the project locally:

```
1. clone repo

2. $ npm install

3. $ npm start
```

### Unit Testing:

The project development was TDD. To run the tests locally:

```
$ npm run test
```

### Build the project and deploy:

```
1. $ npm run build

2. $ firebase deploy
```

## Additional Note:

- This is my first ever RxJs project. I may have missed many best practices in RxJs
- The logic `createTweetSource` was not suppossed to be edited
- Added one more field `id` to the tweets generated for better managing and identification
- To reduce the DOM operation, I've seperated the all the incoming tweets and visibleTweets
- First 5 tweets visible to the user is being added whenever new tweets being generated
- After the first 5, visible tweets will be updated and presented whenever the user request it
- New tweets can be requested when there are more than 3 tweets to be loaded
- Liked tweets never expire until the user clear all tweets
