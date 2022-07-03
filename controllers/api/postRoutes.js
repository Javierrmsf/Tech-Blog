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


  router.delete('/:id', withAuth, async (req, res) => {


    try {
      const [postdata1] = Post.destroy({
        where: {

          id: req.params.id,
          
        },
      });
  

      if (!postdata1) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
  
      res.status(200).json(postdata1);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, res) => {


    try{

     const [postdata1] = await Post.update (req.body, {where: {id:req.params.id,},});

     if (!postdata1) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
  
      res.status(200).json(postdata1);

    }catch (err) {
        res.status(500).json(err);
      }
  });