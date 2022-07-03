const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try{ 
     const commentData = await Comment.findAll({
       include: [User],
     });

     const comments = commentData.map((comment) => comment.get({ plain: true }));

     console.log(comments);
   
     res.render('project', {comments, loggedIn: req.session.loggedIn});
    } catch(err) {
        res.status(500).json(err);
    }
    });