# This is my own quick implementation of Vue push notification

# vue-push-notification

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Note
Get your from Firebase Console then do these following steps: 
1. Go to project settings 
2. Click general and scroll down and select your Web app 
3. Choose Config Radio button
4. Copy firebase config and public key 
5. Create index.js in firebaseFunction directory and Paste firebase config and public key as Vapid
6. create firebase-messaging-sw.js in public directory and  paste firebase config
7. Send message from your firebase console and receive the message in vuejs



