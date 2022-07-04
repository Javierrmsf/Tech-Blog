const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "The amazing race",
    "postContent": "a 40 km. race is called a marathon",
    "userId": 1
  },
  {
    "postTitle": "2022 Soccer world cup",
    "postContent": "The 2022 Soccer will be held in Qatar.",
    "userId": 2
  },
  {
    "postTitle": "Best pasta",
    "postContent": "the best kind of pasta is fetuccini",
    "userId": 3
  },
  {
    "postTitle": "Interesting article",
    "postContent": "very interesting indeed body for this post.",
    "userId": 4
  },
  {
    "postTitle": "There's a Drought",
    "postContent": "please send water!.",
    "userId": 5
  },
  {
    "postTitle": "How to cook",
    "postContent": "Please comment how to cook!.",
    "userId": 6
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;