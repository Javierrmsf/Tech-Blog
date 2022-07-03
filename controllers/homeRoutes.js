const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
   
    const postData = await Post.findAll({
      include: [User],
    });


    
    const posts = postData.map((post) => post.get({ plain: true }));
   


    res.render('all-posts-admin',
     { posts, loggedIn: req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});