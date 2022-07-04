const { Comment } = require('../models');

const commentdata =
[
  {
    "commentContent": "Hello World",
    "userId": "4",
    "postId": "1"

  },
  {
    "commentContent": "Interesting!",
    "userId": "5",
    "postId": "2"

  },
  {
    "commentContent": "That's great!",
    "userId": "6",
    "postId": "3"

  },
  {
    "commentContent": "Wow",
    "userId": "7",
    "postId": "1"

  },
  {
    "commentContent": "The more you know",
    "userId": "4",
    "postId": "2"

  },
  {
    "commentContent": "Whatever",
    "userId": "3",
    "postId": "2"

  },

];

const seedComment = () => Comment.bulkCreate(commentdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedComment;

