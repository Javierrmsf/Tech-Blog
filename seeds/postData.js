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
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;