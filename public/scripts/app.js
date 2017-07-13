const data = [
  {
    user: {
      name: 'Newton',
      avatars: {
        small: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
        regular: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
        large: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png',
      },
      handle: '@SirIsaac',
    },
    content: {
      text: 'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: 'Descartes',
      avatars: {
        small: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png',
        regular: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png',
        large: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png',
      },
      handle: '@rd' },
    content: {
      text: 'Je pense , donc je suis',
    },
    created_at: 1461113959088,
  },
  {
    user: {
      name: 'Johann von Goethe',
      avatars: {
        small: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png',
        regular: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png',
        large: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png',
      },
      handle: '@johann49',
    },
    content: {
      text: 'Es ist nichts schrecklicher als eine tätige Unwissenheit', // causes alert to pop up when we run tweets
    },
    created_at: 1461113796368,
  },
];


const tweetData = {
  user: {
    name: 'Newton',
    avatars: {
      small: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
      regular: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
      large: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png',
    },
    handle: '@SirIsaac',
  },
  content: {
    text: 'If I have seen further it is by standing on the shoulders of giants',
  },
  created_at: 1461116232227,
};


$(document).ready(() => {
  function loadTweets() { // gets our tweets from the /tweets page.
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: renderTweets,
    });
  }
  loadTweets();

  function renderTweets(tweets) {
    for (tweet in tweets) {
      // calls createTweetElement for each tweet
      const tweetData = tweets[tweet];
      const $tweet = createTweetElement(tweetData);
      // takes return value and appends it to the tweets container
      $('#other-tweets').prepend($tweet); // prepend makes the tweet appear at the top
    }
  }

  function createTweetElement(tweet) {
    const $tweet = `<article class="tweet-container">
                  <header class="tweet">
                    <img class="avatars" src="${tweet.user.avatars.small}">
                    <h2> ${tweet.user.name} </h2>
                    <h6 class ="profile-name"> ${tweet.user.handle} </h6>
                  </header>
                    <div class="content-holder"> <div class="content">${escape(tweet.content.text)}</div> </div>
                  <footer>${moment(tweet.created_at).fromNow()}</footer>
                </article>`;

                // used moment fromNow by downloading moment.js file to vendor(front-end). this was done inorder to convert
                //number of milliseconds given in created_at to (1 hour ago).

    return $tweet;
  }

  function dataCheck(data) { // helper function
    if (data.length > 140) {
      alert('Your tweet has exceeded limit');
      return false;
    } else if ((data === '') || (data === null)) {
      alert('Please enter text');
      return false;
    }
    return true;
  }


  $('.form-content').on('submit', function (event) {
    event.preventDefault(); // prevents the page from going to /tweets
    const data = $(this).find('textarea').val(); // this will give us the actual value of data not serialize the data

    if (dataCheck(data)) { // Will call the function to run, if return true do this
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $(this).serialize(), // the data from the tweets
        // on success pass the function loadtweetz
        success: () => {                // ES6 function does not change the value of this which refers to the form.
          $('#other-tweets').empty();      //otherwise normal function would change this to refer to the function itself
          loadTweets();
          $(this).find('textarea').val(''); // this will clear the form after the new tweet is created.
        },
      });
    }
  });

  $('button').on('click', () => {
    $('.new-tweet').slideToggle(750);
    $('textarea').focus();
  });
});


// This function makes malicious javascript as text from the user to a string so if its malicious doesnt affect our app.
function escape(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

