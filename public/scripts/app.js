var data = [
   {
     "user": {
       "name": "Newton",
       "avatars": {
         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
       },
       "handle": "@SirIsaac"
     },
     "content": {
       "text": "If I have seen further it is by standing on the shoulders of giants"
     },
     "created_at": 1461116232227
   },
   {
     "user": {
       "name": "Descartes",
       "avatars": {
         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
       },
       "handle": "@rd" },
     "content": {
       "text": "Je pense , donc je suis"
     },
     "created_at": 1461113959088
   },
   {
     "user": {
       "name": "Johann von Goethe",
       "avatars": {
         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
       },
       "handle": "@johann49"
     },
     "content": {
       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
     },
     "created_at": 1461113796368
   }
 ];


var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
 "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


$(document).ready(function(){
  function renderTweets(tweets) {

       for (tweet in tweets) {
     // calls createTweetElement for each tweet
         let tweetData = tweets[tweet];
         let $tweet = createTweetElement(tweetData);
     // takes return value and appends it to the tweets container
         $('#other-tweets').append($tweet)
       }
 }


  function createTweetElement(tweet) {

    var $tweet =`<article class="tweet-container">
                  <header class="tweet">
                    <img class="avatars" src="${tweet.user.avatars.small}">
                    <h2> ${tweet.user.name} </h2>
                    <h6 class ="profile-name"> ${tweet.user.handle} </h6>
                  </header>
                  <div class="content-holder"> <div class="content">${tweet.content.text}</div> </div>
                  <footer>${tweet.created_at}</footer>
                </article>`

    return $tweet;
  }

  renderTweets(data);
});

//createTweetElement takes tweetData and creates an html element and appends that to our section id other-tweets
// here $tweet is just creating a variable. by convention jquery variables are given $name. $ has not other meaning.

// var $tweet = createTweetElement(tweetData); //calling the function to create element

// console.log($tweet); //checking if the element is being created

// $(document).ready(function() {      //if the document is ready than append the html to our section id.
//   $('#other-tweets').append($tweet);
// })
//$("<h>")




