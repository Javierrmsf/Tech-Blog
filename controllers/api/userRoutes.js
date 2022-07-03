const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newuserData = await User.create({
        
        username: req.body.username, password: req.body.password});

  
      req.session.save(() => {

        
        req.session.userId = newuserData.id;

        req.session.username = newuserData.username;

        req.session.loggedIn = true;
  
        res.status(200).json(newuserData);
      });
    } catch (err) {
      res.status(400).json(err);

    }
  });

  /////////////////////////////////////////

  router.post('/login', async (req, res) => {
    try {


      const userData = await User.findOne({ where: { username: req.body.username }, });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }//
  
      req.session.save(() => {
        req.session.userId = userData.id;
        req.session.username = userData.username
        req.session.loggedIn = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });