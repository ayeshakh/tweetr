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
       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit" // causes alert to pop up when we run tweets
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

  function loadTweets(){        //gets our tweets from the /tweets page.
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: renderTweets
    })
  }
    loadTweets();

  function renderTweets(tweets) {
       for (tweet in tweets) {
     // calls createTweetElement for each tweet
         let tweetData = tweets[tweet];
         let $tweet = createTweetElement(tweetData);
     // takes return value and appends it to the tweets container
         $('#other-tweets').prepend($tweet) //prepend makes the tweet appear at the top
       }
 }

  function createTweetElement(tweet) {
    var $tweet =`<article class="tweet-container">
                  <header class="tweet">
                    <img class="avatars" src="${tweet.user.avatars.small}">
                    <h2> ${tweet.user.name} </h2>
                    <h6 class ="profile-name"> ${tweet.user.handle} </h6>
                  </header>
                  <div class="content-holder"> <div class="content">${escape(tweet.content.text)}</div> </div>
                  <footer>${tweet.created_at}</footer>
                </article>`

    return $tweet;
  }
  //renderTweets(data);

function dataCheck(data){             //helper function
  //console.log("data2:", data)
  console.log("datalength:", data.length);
  if (data.length > 140){
    alert("Your tweet has exceeded limit");
    return false;
  } else if ((data === "")|| (data === null)) {
    alert("Please enter text");
    return false;
  } else {
    return true;
  }
}


  $(".form-content").on("submit", function(event) {
    event.preventDefault(); //prevents the page from going to /tweets
    //console.log($(this).serialize()); //for us to see what data we are sending making into a query string
    let data = $(this).find("textarea").val(); //this will give us the actual value of data not serialize the data
    //dataCheck(data);
    //console.log("data:", data);
    if (dataCheck(data)) { // Will call the function to run, if return true do this
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $(this).serialize(), //the data from the tweets
        // on success pass the function loadtweetz
        success: () => {    //ES6 function does not change the value of this which refers to the form. otherwise normal function would change this to refer to the function itself
          $("#other-tweets").empty();
          loadTweets();
          $(this).find("textarea").val(""); //this will clear the form
        }
      })
    }
  });

  $("button").on("click", function() {
    $(".new-tweet").slideToggle(750);
    $("textarea").focus();
  })
});





//This function makes malicious javascript which might come as text from the user to a string so if doesnt affect our app.
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
 //checked with the alert <script> tag uh oh. it didnt pop up. it was treated like a string







