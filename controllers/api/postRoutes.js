const router = require('express').Router();
const { Post} = require('../../models');
const withAuth = require('../../utils/auth');






router.post('/', withAuth, async (req, res) => {
    
    const body = req.body;

    console.log(body)

    try {
      const newPost = await Post.create({
        ...body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });